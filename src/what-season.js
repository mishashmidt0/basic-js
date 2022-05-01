const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    throw new NotImplementedError('Not implemented');
    if (!date) return 'Unable to determine the time of year!'
    let arr = ["spring", "summer", "autumn", "winter"];
    let d = "";

    if (!(date instanceof Date)) throw new Error("Invalid date!")
    try {
        isNaN(date.getTime())
    } catch {
        throw new Error("Invalid date!")
    }
    let month = date.getMonth() + 1;
    return (month >= 3 && month <= 5) ? d = arr[0] :
        (month >= 6 && month <= 8) ? d = arr[1] :
            (month >= 9 && month <= 11) ? d = arr[2] : d = arr[3];
}

module.exports = {
    getSeason
};
