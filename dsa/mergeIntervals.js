/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (result.length === 0 || result[result.length - 1][1] < start) {
            result.push([start, end]);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], end);
        }
    }

    return result;
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]])); 

