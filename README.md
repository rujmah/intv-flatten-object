# Flatten an Object

Answer to an interview question. Please feel free to submit different answers and comments.

If you'd like to try your own solution first, don't look at the `main.ts` yet!

`main.test.ts` imports the `flattenObject` function from `main.ts`
and runs 3 objects through it

- `{ this: { is: { an: "object" } } }`
- `{ a: { b: { c: 1 } }, d: 2 }`
- `{ a: { b: { c: 1 } }, d: 2, f: { g: 5, h: { i: 4 } } }`

If you want to solve it yourself create a branch and remove `main.ts` and start your own file to import from.

## Interview challenge

Take an object of the form:

```js
{ a: { b: { c:1 } }, d: 2 }`
```

And return an object where properties are only one level deep, with their depth represented in dot notation.

```js
{ 'a.b.c': 1, d: 2 }
```

For the exercise:

- Do not concern yourself with primitives or edge cases;
- Do not remove functions to avoid XSS;
- Assume you have safe valid (but arbitrarily nested) objects;
- Assume there are no circular references in the objects you receive.

## My solution utility details

### Uses

- Node lts/gallium (16.x)
- [Vitest](https://vitest.dev/)

### To run

- `npm i`
- `npm test`

### Create from scratch

- `mkdir <your-project-name> && cd $_ && npm init -y`
- `touch main.ts main.test.ts`
- Add `"test": "vitest"` to `package.json`
- `npm test`

And off you go to solve the riddle...
