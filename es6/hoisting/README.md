# Hosting - Keo len / dua len

Dua khai bao bien var va khai bao ham len dau file

## Hosting voi "var", "function declaration"

```js
//var age;

console.log(age);
console.log(fullName);

var age = 18;
```

```js
console.log(sum(1, 2));

function sum(a, b) {
  return a + b;
}
```

### Khai bao ham bang function expression?

```js
console.log(sum(1, 2));

var sum = function (a, b) {
  return a + b;
};
```

- Luu y: Phan khai bao duoc dua len, phan gan khong duoc dua len

## Hosting voi "let", "const", "function expression"

```js
console.log(fullName); // undefined ? Uncaught ReferenceError

let fullName = "Nguyen Van A";
```

- Luu y: Khi khai bao bien bang let, const, khi hoisting, bien se duoc khai bao, nhung khong duoc "tao" gia tri va dua vao `Temporal Dead Zone`. Khac voi var, gia tri mac dinh duoc tao la `undefined`

### Vay hoisting de lam gi?

```js
let fullName = "Nguyen Van A";
{
  {
    {
      let fullName = "Nguyen Van B";
      console.log(fullName);
      //let fullName = "Nguyen Van B";
    }
  }
}
```

## Bonus

```js
const counter1 = counter();

console.log(counter1());

function counter() {
  let count = 0;

  return increse; // loi? thoat ham?

  function increse() {
    return ++count;
  }
}
```
