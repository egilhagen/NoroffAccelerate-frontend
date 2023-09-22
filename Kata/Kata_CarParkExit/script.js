
function findInitialPosition(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j]===2){
                return {row: i, col: j};
            }            
        }
    }
}      

function findNearestStaircase(arr, row, col) {
    let minDistance = 10;
    let nearestStaircase = null;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
                const distance = Math.abs(i - row) + Math.abs(j - col);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestStaircase = { row: i, col: j };
                }
            }
        }
    }
    return nearestStaircase;
}

function parkingExit(arr) {
    const initialPosition = findInitialPosition(arr);
    const result = [];
    let row = initialPosition.row;
    let col = initialPosition.col;

    while (true) {
        const nearestStaircase = findNearestStaircase(arr, row, col);

        if (nearestStaircase === null) {
            break;
        }

        const { row: i, col: j } = nearestStaircase;
        const rowDiff = i - row;
        const colDiff = j - col;

        if (rowDiff > 0) {
            result.push(`D${rowDiff}`);
        }
        if (colDiff > 0) {
            result.push(`R${colDiff}`);
        }
        if (colDiff < 0) {
            result.push(`L${-colDiff}`);
        }

        row = i;
        col = j;
    }

    return result;
}


console.log(parkingExit([[1, 0, 0, 0, 2], [0, 0, 0, 0, 0]])); // Output: ["L4", "D1", "R4"]
console.log(parkingExit([[2, 0, 0, 1, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]])); // Output: ["R3", "D2", "R1"]
console.log(parkingExit([[0, 0, 0, 0, 2]])); // Output: []
