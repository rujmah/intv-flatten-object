import { expect, test } from "vitest";
import { flattenObject } from "./main";

test("should flatten object - with single embedded object", async () => {
  const testObject = { this: { is: { an: "object" } } };
  const flattenedObject = { "this.is.an": "object" };

  const res = await flattenObject(testObject);
  expect(res).toEqual(flattenedObject);
});

test("should flatten object - with base and nested levels", async () => {
  const testObject = { a: { b: { c: 1 } }, d: 2 };
  const expectedObject = { "a.b.c": 1, d: 2 };

  const res = await flattenObject(testObject);
  expect(res).toEqual(expectedObject);
});

test("should flatten object - with multiple levels", async () => {
  const testObject = { a: { b: { c: 1 } }, d: 2, f: { g: 5, h: { i: 4 } } };
  const expectedObject = { "a.b.c": 1, d: 2, "f.g": 5, "f.h.i": 4 };

  const res = await flattenObject(testObject);
  expect(res).toEqual(expectedObject);
});
