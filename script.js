function hello (){
    console.log('HEllo')
}


 hello()
// const hello = function () {
//     console.log('idk')
// }
// hello()

// hello = () => {
//     console.log('goodbye')
// }

// hello()

// fucntions with params

// function param(par1, par2){



// }

const word = function(num1, num2, num3){
let add = num1 + num2 + num3;
return add
}
// word(1,2,3)
console.log(word(1,6,4567890))


//returns the product
function prod(num1, num2){
    let multi = num1 * num2
    return multi
}
prod(3,8) //24

const prod = (parm1, parm2) => {
    const together = parm1 * parm2
    return together;
}
prod(3,8)




getAverage([2,2,2,4]) // this what the function value should 2.5

const getAverage= function (arr) {
    //instead of declaring an empty array we need a start point at 0 to save the valueof the numbers when added
    let newArr= [];
    //iterating through the array
    for( const of item of arr) {
        //we're missing th part to add the items 
    }
}
getAverage(2,2,2,4)

const understanding = function(arr){
    let count = 0;
    for(const item of arr){
        //instead of having the arr.length/4 added up have just the array item itself
        count += arr.length/4;
    }
    //return the count divided by the number of the length of the array, because count has stored the sum of all numbers and than the array.length gives us the vaule of how many numbers are
return count
}
understanding([2,2,2,4])

//THIS IS DONE THE RIGHT WAY 
function getAverage(array){
    let result = 0 
    
    for (const item of array){
    result += item 
    }
    return result/ array.length
    }
getAverage[2,2,2,4]


//write a function that takes in an array and returns the sum of those number 
//This also is done the right way
function returnSum(array){
    let sum = 0
    for(const item of array){
    sum += item
    }
return sum
}
returnSum([2,3,4])

sumOfArr([2,3,4]) //output 9



//Done RIGHT!
const addUp= function(arr){
    let count= 0;
    for( const item of arr ){
        sum += item 
    }
    return count 
}
addUp([1,2,3,4,5])
console.log(addUp([1,2,3,4,5]))




//Done Right
function takeIn(arr){   //Sharod
    let count = 0;
    for(numbers of arr){
count += numbers;
    }
    return count
}
takeIn([1,2,3,4,5])
console.log(takeIn([1,2,3,4,5]))


//////addNumber/////// 
function addNumber(array, plus){
    let result = []
    for(const item of array){
    //instead of '+=' we need to use the method .push() becuase we need an array not a string
    result += item + plus
    }
    return result
    }
    addNumber([2,3,4],2)


/// DONE right with extension of only add the values to the even numbers
const addNumber = (arr,num) => {
    let newArr = []
    for(const digits of arr){
    if(digits % 2 === 0){
    let newValue = digits + num;
    newArr.push(newValue);
    }
    return newArr
    }
}
    addNumber([2,3,4],2)
















//DONE RIGHT  for adding the number to all the items in the array
function addNumber(arr, num) {
    let newValves = []
    for(const item of arr){
    newValves.push(item + num)
    }

    return newValves
    
}
console.log(addNumbers([2,3,4], 2))


//DONE RIGHT  for adding the number to all the items in the array
const added= function(arr, num){
    let newArr= []
    for(const item of arr){
        let number= item + num
        newArr.push(number);
    
    }
    return newArr
}
console.log(added([2,3,4],2))



const triStateONly= function(arr){
    let newArr= [];
    for(const item of arr){
        //lastIndexOf returns the index and not the value of the item. We need to check what it ends with instead.
       if (newArr.lastIndexOf('ny, nj, ct'));
       newArr.push(item)
    }
    return newArr
}
triStateOnly('ny, nj, ct');

///sharod
//almost close enough
const area = (arr) => {
    let empty = [];
    for(const cities of arr){
    //when cheking for multiple options use the or || operator, endsWith doesn't accept more than one param
    if(cities.endswith('NY','NJ','NY')){
    empty.push(cities)
    }
    }
    return empty
    }
    area(['Brooklyn NY', 'Boston MA', 'Buffalo, NY'])


    //DONE RIGHT
    function onlyVowelsInAString(str){
       let newStr =''
        // let vowels = 'aeoui'
        for(const char of str){
          // console.log(str[i])
          //if(vowels.includes(str[i]))
          console.log(char)
          if('aeoui'.includes(char)){
            // newStr  += str[i]
            newStr += char
          }
          
        }
      
        return newStr
      
      }
      
      
      onlyVowelsInAString('hello there') // 'eoee'
    onlyVowelsInAString('hello there') // return 'eoee'
//DONE RIGHT
    function onlyVowelsInAArray(arr) {
        let newArr =[]
 
        for(const char of arr){
      
          console.log(char)
          if('aeoui'.includes(char)){
     
            newArr.push(char)
          }
        }
        return newArr
    }

    onlyVowelsInAArray(['h','e','l','l','t','h','e','r','e'])// return [e,o,e,e]


addStr(['hello','hi','maybe'], 'bye') // ['hello bye', 'hi bye', 'maybe bye']
///////only vowels///////
//Done RIght
function onlyVowels(str){
let newStr = " "
    
for(const item of str){
if ("aeiou".includes(item)){
newStr += item
}
}
return newStr
} 
onlyVowels("hello there")



    
    function onlyVowelsInAString(str) {
        let newStr = ''
        for(const item of str){
            if ('aeiou'.includes(item)){
        
            }
            //since we are using for of we don't need str[i]  we just need item. str[i] will throw an error since i is not declared anything
            newStr += str[i]
            }
        }

        
        function onlyVowelsInAArray(arr) {
            let newString = []
            for(const item of arr){
                if ('aeiou'.includes(item)){
                    newString.push(item)  
                }
            }
            //missing the return 

        }
//Done Right to add the string passed as a second param to each of the arr items

        function addStr(arr, str) {
            let newStr = []
            for(const item of arr){
                {
                    newStr.push(item + " " + str)
                }
            }
return newStr
            
        }

//////array to string//////
//Done Right
function addStr(array, str){
let newArray = []
    
for (const item of array){
    newArray.push(item + " " + str)
}
return newArray
}
    
addStr(['hello', 'hi', 'maybe'], 'bye')
        

        



