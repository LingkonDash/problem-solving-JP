/* 
1. https://leetcode.com/problems/two-sum/description/
2. https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
3. https://leetcode.com/problems/valid-anagram/description/
4. https://leetcode.com/problems/ransom-note/description/
5. https://leetcode.com/problems/contains-duplicate/description/
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
   // hashSet to collect all leftover by the loop
   const hashSet = {};


   for (let i = 0; i < nums.length; i++) {

      // checking if the index exist in the hashSet
      if (typeof hashSet[target - nums[i]] !== 'undefined') return [hashSet[target - nums[i]], i]

      hashSet[nums[i]] = i;
   }
};

// const result = twoSum([2,7,11,15], 9);
// console.log('result: ', result);


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
   let index = 0;
   let couter = 0;
   for (let i = 0; i < nums.length; i++ ) {
      
      if(nums[i] === nums[index]) continue;
      couter++;
      nums[index + 1] = nums[i]
      index = i;
      
   }
   return couter;
};


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

   hashSet = {};

   for (let i = 0; i < ransomNote.length; i++) {
      hashSet[ransomNote[i]] = hashSet[ransomNote[i]] + 1 || 1;
   }

   for(let i = 0; i < magazine.length; i++) {
      if(typeof hashSet[magazine[i]] !== 'undefined') {
         hashSet[magazine[i]] = hashSet[magazine[i]] - 1;
      }
   }

   for(const ch in hashSet) {
      
      if(hashSet[ch] > 0) return false;
      
   }

   return true;
   
};

const ransomNote = "fihjjjjei"
const magazine = "hjibagacbhadfaefdjaeaebgi"

const result = canConstruct(ransomNote, magazine);

console.log(result);
