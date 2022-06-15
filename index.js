// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// let winFinder = record.find(superbowlWin => superbowlWin.result === 'W')
// console.log(winFinder)

// function superbowlWin(record) {
//     if (record.result === "W")
//     return (record.year);
// }
// record.find(superbowlWin);

function superbowlWin(array) {
    const results = array.find(record => record.result === "W") 
    return !!results ? results.year : undefined 
     if (results === true) {
        return results.year
    } else {
        return undefined
    }
}