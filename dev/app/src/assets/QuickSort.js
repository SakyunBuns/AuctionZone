//Javascript Freecodecamp.org Algorithm #34: Implement Quick Sort
//https://www.youtube.com/watch?v=P6XGSKO2RzI&t=121s
//Quick Sort - Computerphile
//https://www.youtube.com/watch?v=XE4VP_8Y0BU

export default class QuickSort{

    sort(array, variableName) {
        if (array.length <= 1) {
            return array
        }
    
        const medianIndex = Math.floor(array.length / 2)
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []
    
        if (typeof variableName !== 'undefined') {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue
                } else if (array[i][variableName] < pivot[variableName]) {
                    lowerArray.push(array[i])
                } else {
                    higherArray.push(array[i])
                }
            }
    
            return [...this.sort(lowerArray, variableName), pivot, ...this.sort(higherArray, variableName)];
        } else {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue
                } else if (array[i] < pivot) {
                    lowerArray.push(array[i])
                } else {
                    higherArray.push(array[i])
                }
            }
    
            return [...this.sort(lowerArray), pivot, ...this.sort(higherArray)]
        }
    }
    
    
    reverseSort(array, variableName) {
        if (array.length <= 1) {
            return array
        }

        const medianIndex = Math.floor(array.length / 2)
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []

        if (typeof variableName !== 'undefined') {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue
                } else if (array[i][variableName] > pivot[variableName]) {
                    lowerArray.unshift(array[i])
                } else {
                    higherArray.unshift(array[i])
                }
            }
    
            return [...this.reverseSort(lowerArray, variableName), pivot, ...this.reverseSort(higherArray, variableName)];
        } else {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue
                } else if (array[i] > pivot) {
                    lowerArray.unshift(array[i])
                } else {
                    higherArray.unshift(array[i])
                }
            }
    
            return [...this.reverseSort(lowerArray), pivot, ...this.reverseSort(higherArray)]
        }
    }

    uniqueSort(array, variableName) {
        if (array.length <= 1) {
            return array
        }
      
        const medianIndex = Math.floor(array.length / 2);
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []
      
        if (typeof variableName !== 'undefined') {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue
                }
                else if (array[i][variableName] === pivot[variableName]) {
                    continue;
                } 
                else if (array[i][variableName] < pivot[variableName]) {
                    lowerArray.push(array[i])
                } else {
                    higherArray.push(array[i])
                }
            }
    
            return [...this.uniqueSort(lowerArray, variableName), pivot, ...this.uniqueSort(higherArray, variableName)];
        } else {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue;
                }
                else if (array[i] === pivot) {
                    continue;
                }
                else if (array[i] < pivot) {
                    lowerArray.push(array[i])
                } 
                else{
                    higherArray.push(array[i])
                }
            }
          
            return [...this.uniqueSort(lowerArray), pivot, ...this.uniqueSort(higherArray)]
        }
    }

    uniqueReverseSort(array, variableName) {
        if (array.length <= 1) {
            return array
        }

        const medianIndex = Math.floor(array.length / 2)
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []

        if (typeof variableName !== 'undefined') {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue
                }
                else if (array[i][variableName] === pivot[variableName]) {
                    continue;
                } 
                else if (array[i][variableName] > pivot[variableName]) {
                    lowerArray.unshift(array[i])
                } else {
                    higherArray.unshift(array[i])
                }
            }
    
            return [...this.uniqueReverseSort(lowerArray, variableName), pivot, ...this.uniqueReverseSort(higherArray, variableName)];
        } else {
            for (let i = 0; i < array.length; i++) {
                if (i === medianIndex) {
                    continue;
                }
                else if (array[i] === pivot) {
                    continue;
                }
                else if (array[i] > pivot) {
                    lowerArray.unshift(array[i])
                } 
                else{
                    higherArray.unshift(array[i])
                }
            }
          
            return [...this.uniqueReverseSort(lowerArray), pivot, ...this.uniqueReverseSort(higherArray)]
        }
    }

    randomOrder(array){
        let unsortedArray = [];
        for (let i = 0; i < array.length; i++) {
            unsortedArray.splice(Math.floor(Math.random() * (unsortedArray.length + 1)), 0, array[i])
        }
        return unsortedArray
    }
}


// const qs = new QuickSort()
// // console.log(qs.randomOrder([1, 2, 4, 5, 6, 7]))


// let test = [
//     {
//         tag: "Beauty",
//         visitedCount: 10
//     },
//     {  
//         tag:"Sport",
//         visitedCount: 25
//     },
//     {  
//         tag:"Food",
//         visitedCount: 25
//     },
//     {  
//         tag:"Video games",
//         visitedCount: 2
//     }
// ]


// console.log("Sort")
// console.log(qs.sort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.sort(test, "visitedCount"))
// console.log("Reverse Sort")
// console.log(qs.reverseSort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.reverseSort(test, "visitedCount"))
// console.log("Unique Sort")
// console.log(qs.uniqueSort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.uniqueSort(test, "visitedCount"))
// console.log("Unique Reverse Sort")
// console.log(qs.uniqueReverseSort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.uniqueReverseSort(test, "visitedCount"))
