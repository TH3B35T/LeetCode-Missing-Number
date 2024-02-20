/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    // let sum = nums.reduce((acc, num) => acc += num, 0)
    // const n = nums.length
    // const expected_sum = Math.floor((n * (n+1)) / 2)

    // return expected_sum - sum

    // const nums_set = new Set(nums);

    // for(let i = 0; i<= nums.length; i++){
    //     if(!nums_set.has(i)){
    //         return i
    //     }
    // }

    let missing_number = 0;

    // XOR all numbers from 0 to n
    for(let i = 0; i<= nums.length; i++){
        missing_number ^= i;
    }
    // XOR again with all numbers in nums to isolate the missing number
    nums.forEach(num => missing_number ^= num);


    return missing_number;
};
