import reduce from '../reduce';

/**
 * Groups a series of unary functions into a function with many parameters
 *
 * @func
 * @param {Function} fn
 * @return {Function}
 * @example
 * const add = (x)(y)(z) => x + y + z;
 * const curriedAdd = uncurry(add);
 * curriedAdd(1, 2, 3); // 6
 */
const uncurry = fn => (...args) => reduce(args, (ret, arg) => ret(arg), fn);

export default uncurry;
