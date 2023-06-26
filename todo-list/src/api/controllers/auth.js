import bcrypt from "bcryptjs";
import User from "../models/user";
import HttpException from "../exceptions/http-exception";
import jwt from "jsonwebtoken";

const genToken = (user, expiresIn = "1d") => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: expiresIn }
  );
};

const genRefreshToken = (user, expiresIn = "365d") => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: expiresIn }
  );
};

const refreshTokens = [];

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) throw new HttpException(404, "User not found");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new HttpException(400, "Incorrect password");

  const accessToken = genToken(user);
  const refreshToken = genRefreshToken(user);

  refreshTokens.push(refreshToken);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    path: "/",
  });

  res.status(200).json({ user, accessToken });
};

export const requestRefreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) throw new HttpException(400, "No refresh token");

  if (!refreshTokens.includes(refreshToken)) throw new HttpException(403, "Refresh token is invalid");

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY);

    const user = await User.findById(decoded.id);

    if (!user) throw new HttpException(404, "User not found");

    const accessToken = genToken(user);

    res.status(200).json({ user, accessToken });
  } catch (error) {
    throw new HttpException(401, "Invalid refresh token");
  }
};
