# Strict mode

### Cach su dung

- Them vao dau file
- Them vao the script
- Them vao pham vi ham

```js
fullName = "Nguyen Van A"; // lieu co chay duoc khong?

function test() {
  age = 18;
}

test();

console.log(fullName);
console.log(age); // lieu co chay duoc khong?
```

### Cong dung

- Tranh quen tu khoa khai bao bien
- Bao loi khi gan cho thuoc tinh co writeable = false

```js
const student = {
  name: "Nguyen Van A",
};

student.name = "Nguyen Van B";

console.log(student.name);
```

```js
const student = Object.freeze({
  name: "Nguyen Van A",
});
```

```js
const student = {};

Object.defineProperty(student, "name", {
  value: "Nguyen Van A",
  writable: false,
});
```

- Tranh trung ten

```js
function sum(a, a) {
  return a + a;
}

console.log(sum(1, 2));
```

- Tranh trung voi tu khoa

```js
const protected = "123";
console.log(protected);
```

- Khai bao trong code block thi chi su dung duoc trong code block

```js
{
  function sum(a, b) {
    return a + b;
  }
}

console.log(sum(1, 2));
```

- Su dung bo nho hieu qua vi tranh tao bien global
