//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.

// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6

function firstlastindex(){
    var sampleArray = [1,2,3,4,5] 
    console.log(sampleArray[0] + sampleArray[4])
}

firstlastindex()

// 2. Write a JavaScript program to find the leap years in a given range of years. 


function leapyearrange(firstyear, lastyear){
    const leapyear = []
    const lastnumber = (loopyear) => loopyear === lastyear
    for(let i = firstyear; i <= lastyear; i++ ){
        if(i % 4==0){
            leapyear.push(i);
        }
    }
    console.log(leapyear.findIndex(lastnumber)+1)
    }

leapyearrange(1980, 2020)

// 3. Write a JavaScript function to sort the following array of objects by title value.
 var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function sorttitle(){
    for (let i=0; i < library.length; i++){ 
        console.log(library[i].title)
    }
}
sorttitle()

 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
//  Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

const mixedData1 = [2, "11", 3, "a2", false, 5, 7, 1]
const mixedData2 = [2, 3, 0, 5, 7, 8, true, false]
function mixedDataSum(){
    const sum = mixedData1.reduce((previous, current) => {
        if(typeof current == 'number'){
            return previous + current
        }
        return previous
        }, 0);
        console.log(sum)
}
mixedDataSum()

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
   drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "coke", price: 30},
    {name: "pepsi", price: 20}
  ]
  
  function drinksSort(){
  drinks.sort(function(x,y){
    return x.price - y.price;
  });
  console.log(drinks)
}

drinksSort()
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

