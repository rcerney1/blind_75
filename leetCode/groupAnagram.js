const groupAnagrams = (strs) => {
    //sort each word in array
    let sorted = strs.map(str => str.split("").sort().join(""))
    

    let map = {};

    for (let i = 0; i < sorted.length; i++){
        if(!map[sorted[i]]) {
            map[sorted[i]] = [strs[i]];
        } else {
            map[sorted[i]].push(strs[i]);
        }
    }

    return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))