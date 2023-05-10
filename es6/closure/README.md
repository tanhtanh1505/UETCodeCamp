# Closure

La mot ham co the ghi nho noi no duoc tao va truy cap duoc bien o ngoai pham vi cua no

## Ung dung

- Viet code ngan gon hon

```js
function createLogger(type) {
  function logger(message) {
    console.log(`[${type}] ${message}`);
  }
  return logger;
}
```

```js
function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) || {};

  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };

  return storage;
}
```

- Bieu dien tinh private trong OOP

```js
// let car = [];
function createApp() {
  const cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    show() {
      console.log(cars);
    },
  };
}
// car = 'hi';
```

## Luu y

- Bien duoc tham chieu (refer) trong closure se khong duoc xoa khoi bo nho cho den khi ham cha thuc thi xong
