const assert = <T>(variable: T, condition1: (a: T) => boolean, message?: string) => {
  console.assert(condition1(variable), message);
};

export default assert;
