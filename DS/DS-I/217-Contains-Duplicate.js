/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hashMapObj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hashMapObj[nums[i]])
            return true;
        else hashMapObj[nums[i]] = 1;
    }
    
    return false;
};
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.