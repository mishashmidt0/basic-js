const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    throw new NotImplementedError('Not implemented');
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    if (arr.length === 0) return [];

    let transformArr = [...arr]
    arr.forEach((el, index) => {

        (el == `--discard-next`) ? delNext(index) :
            (el == `--discard-prev`) ? delPrev(index) :
                (el == `--double-next`) ? dubNext(index) :
                    (el == `--double-prev`) ? dubPrev(index) : el;


    })


    function delNext(index) {
        if (index === transformArr.length - 1) return transformArr.splice(index, 1)
        return transformArr.splice(index, 2)
    }

    function delPrev(index) {
        if (index === 0) return transformArr.splice(index, 1)
        return transformArr.splice(index - 1, 2)
    }

    function dubNext(index) {
        if (index === transformArr.length - 1) return transformArr.splice(index, 1)
        return transformArr.splice(index, 1, transformArr[index + 1])
    }

    function dubPrev(index) {
        if (index === 0) return transformArr.splice(index, 1)
        return transformArr.splice(index, 1, transformArr[index - 1])
    }

    return transformArr
}

module.exports = {
    transform
};
