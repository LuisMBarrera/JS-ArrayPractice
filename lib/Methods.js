module.exports = {
    // Ex1. each(callback)method
    
    
    // Ex14. flatten()method
    flatten: Array.prototype.flatten = function () {
        let self = this;
        let flattenArray = [];
        let recurse = function (array) {
            let i;
            for (i = 0; i < array.length; i += 1) {
                if (Array.isArray(array[i])) {
                    recurse(array[i]);
                } else {
                    flattenArray.push(array[i]);
                }
            }
        }
        recurse(self);
        return flattenArray;
    }
}
