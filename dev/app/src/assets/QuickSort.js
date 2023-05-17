//Javascript Freecodecamp.org Algorithm #34: Implement Quick Sort
//https://www.youtube.com/watch?v=P6XGSKO2RzI&t=121s
//Quick Sort - Computerphile
//https://www.youtube.com/watch?v=XE4VP_8Y0BU

export default class QuickSort{

    sort(array) {
        if (array.length <= 1) {
            return array
        }
      
        const medianIndex = Math.floor(array.length / 2);
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []
      
        for (let i = 0; i < array.length; i++) {
            if (i === medianIndex) {
                continue;
            }
            else if (array[i] < pivot) {
                lowerArray.push(array[i])
            } 
            else{
                higherArray.push(array[i])
            }
        }
      
        return [...this.sort(lowerArray), pivot, ...this.sort(higherArray)]
    }

    reverseSort(array) {
        if (array.length <= 1) {
            return array
        }

        const medianIndex = Math.floor(array.length / 2)
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []

        for (let i = 0; i < array.length; i++) {
            if (i === medianIndex) {
                continue
            }
            else if (array[i] > pivot) {
                higherArray.unshift(array[i])
            } 
            else{
                lowerArray.unshift(array[i])
            }
        }
        return [...this.reverseSort(higherArray), pivot, ...this.reverseSort(lowerArray)]
    }

    uniqueSort(array) {
        if (array.length <= 1) {
            return array
        }
      
        const medianIndex = Math.floor(array.length / 2);
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []
      
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

    uniqueReverseSort(array) {
        if (array.length <= 1) {
            return array
        }

        const medianIndex = Math.floor(array.length / 2)
        const pivot = array[medianIndex]
        const lowerArray = []
        const higherArray = []

        for (let i = 0; i < array.length; i++) {
            if (i === medianIndex) {
                continue
            }
            else if (array[i] === pivot) {
                continue;
            }
            else if (array[i] > pivot) {
                higherArray.unshift(array[i])
            } 
            else{
                lowerArray.unshift(array[i])
            }
        }
        return [...this.uniqueReverseSort(higherArray), pivot, ...this.uniqueReverseSort(lowerArray)]
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
// console.log(qs.randomOrder([1, 2, 4, 5, 6, 7]))

// console.log(qs.sort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.uniqueSort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.reverseSort([2,3,2,45,1234,5662,2,33,4,5,1]))
// console.log(qs.uniqueReverseSort([2,3,2,45,1234,5662,2,33,4,5,1]))

