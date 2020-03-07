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
return count
}
understanding([2,2,2,4])

function getAverage(array){
    let result = 0 
    
    for (const item of array){
    result += item 
    }
    return result/ array.length
    }
getAverage[2,2,2,4]


//write a function that takes in an array and returns the sum of those number
function returnSum(array){
    let sum = 0
    for(const item of array){
    sum += item
    }
return sum
}
returnSum([2,3,4])

sumOfArr([2,3,4]) //output 9




const addUp= function(arr){
    let count= 0;
    for( const item of arr ){
        sum += item 
    }
    return count 
}
addUp([1,2,3,4,5])
console.log(addUp([1,2,3,4,5]))





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
    result += item + plus
    }
    return result
    }
    addNumber([2,3,4],2)

const addNumber = (arr,num) => {
    let newArr = []
    for(const digits of arr){
    if(newValue % 2 === 0){
    let newValue = digits + num;
    newArr += newValue;
    }
    return newArr
    }
}
    addNumber([2,3,4],2)

















function addNumber(arr, num) {
    let newValves = []
    for(const item of arr){
    newValves.push(item + num)
    }

    return newValves
    
}
console.log(addNumbers([2,3,4], 2))



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
       if (newArr.lastIndexOf('ny, nj, ct'));
       newArr.push(item)
    }
    return newArr
}
triStateOnly('ny, nj, ct');

///sharod
const area = (arr) => {
    let empty = [];
    for(const cities of arr){
    if(cities.endswith('NY','NJ','NY')){
    empty.push(cities)
    }
    }
    return empty
    }
    area(['Brooklyn NY', 'Boston MA', 'Buffalo, NY'])

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



    const isVowel= function(str){
        let VowelsOnly = '';
    }
        {
            return ('e,o,e,e')
        }
        {
        let newStr= 'hello there';
        for( const char of str);
        
        if(str.length === char.includes){
            add.newStr(char);
        
        }
        {
        return newStr
        }
        }
        isVowel('str')



    const isArr= function(arr){
        let newArr= [];
        let vowels= ['']

        for(const item of arr){
            if(item[i]=== arr.includes){
            
        }
    }


    



        
        
    

        































    
    
    
    
    
    
    
    
    function onlyVowelsInAString(str) {
        let newStr = ''
        for(const item of str){
            if ('aeiou'.includes(item)){
        
            }
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

        }

        
        
        
        
        
        
        
        
        
        
        
        
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
function addStr(array, str){
let newArray = []
    
for (const item of array){
    newArray.push(item + " " + str)
}
return newArray
}
    
addStr(['hello', 'hi', 'maybe'], 'bye')
        

        



