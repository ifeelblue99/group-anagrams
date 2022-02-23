/*

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

const itemsArr = ["eat","tea","tan","ate","nat","bat"]

function groupAnagrams(arr) {
    let sortedItems = [];
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        sortedItems[i] = arr[i].split('').sort().join('');
        let subArray = map.get(sortedItems[i]);
        map.set(sortedItems[i], subArray ? [...subArray, sortedItems[i]]: [sortedItems[i]]);
    };  
    //return Array.from(map, ([key,value]) => value)
    return Array.from(map)
};

console.log(groupAnagrams(itemsArr))
