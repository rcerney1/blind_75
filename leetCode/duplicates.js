const duplicates = (array) => {
    const seen = new Set(array);

    //return true of set size is different from array size
    return seen.size !== array.size;
}


console.log(duplicates([1,2,3,1]));