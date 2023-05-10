# Scope

## Global Scope

```js
function log() {
  console.log("Log");
}
function logger() {
  log();
}

logger();
```

## Function Scope

```js
function logger() {
  function log() {
    console.log("Log");
  }
  //   log();
  //var a = 2;
}

log();
logger();
```

## Block Scope

```js
{
  var a = 1;
}

console.log(a);

// let, const?
```

```js
const a = 1;
{
  console.log(a);
}
```

```js
const a = 3;
{
  const a = 1;
  {
    {
      //const a = 2;
      console.log(a);
      //const a = 2; thu voi var
    }
  }
}
```

```js
const a = {name: 'a};
a.name = 'b';
console.log(a);
```

## Khi nao 1 bien bi xoa khoi bo nho?

- Bien toan cau?
- Bien trong block, function?
- Bien trong ham tham chieu boi 1 ham?

```js
function counter() {
  let counter = 0;

  function increase() {
    return counter++;
  }

  return increase;
}

const count = counter();
console.log(count());
console.log(count());
```
