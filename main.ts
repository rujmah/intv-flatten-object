export const flattenObject = async (input, kz = "") => {
  let out = {};

  for (const key of Object.keys(input)) {
    const k = kz.length < 1 ? key : kz.concat(".", key);
    if (typeof input[key] === "object") {
      const res = await flattenObject(input[key], k);
      out = { ...res, ...out };
    } else {
      if (input[key] !== undefined) out[k] = input[key];
    }
  }

  return out;
};
