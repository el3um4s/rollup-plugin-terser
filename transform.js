import {
  minify
} from "terser";

const transform = async (code, optionsString) => {
  const options = eval(`(${optionsString})`);
  const result = await minify(code, options);
  return ({
    result,
    nameCache: options.nameCache
  });
};

export default transform;