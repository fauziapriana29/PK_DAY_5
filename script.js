const filterword = [
    'javascript',
    'crud',
    'react native',
    'camelCase',
    'variable',
    'nodejs',
    'express',
];

let longITwords = filterword.filter(word => word.length > 6 );
console.log('long IT words are : ' , longITwords);

let array1 = [1, 4, 9, 16];

const newArray = array1.map((x) => {
    return x * 2
})
console.log(newArray)


//find
let numbers = [5, 12, 8, 130, 44]
let numberfound = numbers.find((number) => number > 10)
console.log(numberfound)

//forEach
let numbersword = ['one', 'two', 'three'];
let texts = ''

numbersword.forEach((number) => {
    texts += number + ','
})
console.log( 'text is :' + numbersword)

//charAt example
let stringZealBatam = 'Zeal Batam Indonesia';
let resultChartAt0 = stringZealBatam.charAt(0);
console.log('resultChartAt 0 : ' , resultChartAt0)

let resultChartAt1 = stringZealBatam.charAt(1);
console.log('resultChartAt 1 : ' , resultChartAt1)

let resultChartAt2 = stringZealBatam.charAt(9);
console.log('resultChartAt 2 : ' , resultChartAt2)

//length example
let resultLength = stringZealBatam.length;
console.log('resultLength is', resultLength)

//toUpperCase 
let resultToUpperCase = stringZealBatam.toUpperCase();
console.log('resultToUpperCase is : ' , resultToUpperCase)

//toLowerCase
let resultToLowerCase = stringZealBatam.toLowerCase();
console.log('resultToLowerCase is : ' , resultToLowerCase)

//split
let resultSplit = stringZealBatam.split(' ');
console.log('resultSplit is ' , resultSplit)
resultSplit = stringZealBatam.split(' ', 2)
console.log('secound resultSplit is ' , resultSplit)

//replace 
let resultReplace = stringZealBatam.replace('Batam', 'Kepulauan Riau');
console.log('resultReplace is ', resultReplace)

//substr 
let resultSubstr = stringZealBatam.substr(0, 6);
console.log('resultSubstr is : ' , resultSubstr);
resultSubstr = stringZealBatam.substr(0, 3);
console.log('secound resultSubstr is : ' , resultSubstr)


//array method
// length
let zealBatamArray = ['zeal', 'Batam', 'Indonesia'];
let resultarraylength = zealBatamArray.length;
console.log('result array lengt is : '  , resultarraylength)

//indexOf
let resultarrayindexof = zealBatamArray.indexOf('Batam')
console.log('index of is : ' , resultarrayindexof)
resultarrayindexof = zealBatamArray.indexOf('Indonesia')
console.log('secound index of is : ' ,resultarrayindexof)

//push
zealBatamArray.push('web');
console.log('push int array is :' , zealBatamArray)

//pop
zealBatamArray.pop()
console.log( 'pop from array is : ' , zealBatamArray)

//join
let resultjoin = zealBatamArray.join('__');
console.log('join array is : ' , resultjoin)

//slice
let resultslice = zealBatamArray.slice(1);
console.log('result slice is : ' , resultslice)
resultslice = zealBatamArray.slice(1, 2)
console.log('secound slice is : ' , resultslice)

//sort
zealBatamArray.sort();
console.log('sort is : ', zealBatamArray)

//reverse
zealBatamArray.reverse();
console.log('reverse is : ' , zealBatamArray)


//math method

//random
let resultrandom = Math.random();
console.log(' random is : ' , resultrandom)

//ceil = pembulatan ke atas
let resultceil = Math.ceil(2.5)
console.log(' ceil is : ', resultceil)
resultceil = Math.ceil(2.1)
console.log('secound ceil : ', resultceil)

//floor = membulat kan sehingga koma tidak di hitung
let resultfloor = Math.floor(1.9);
console.log('floor is : ' , resultfloor)

//rounding = pembulatan
let resultround = Math.round(2.4)
console.log( 'round is : ' , resultround)
resultround = Math.round(2.5)
console.log('secound round is : ', resultround)

//object method

//assign 
let object1 = { fname: 'jhon'};
let object2 = { lname: 'doe'};
let object3 = { age: 30}

let object4 = {...object1, ...object2, ...object3}
console.log('value object4 is : ', object4)

let object5 = { object1, object2, object3}
console.log('value object 5 is : ', object5)

//object key = mengconvert dari object menjadi array
let resultobject = Object.keys(object5)
console.log('resultObject is : ', resultobject)

//timing methode

//setinterval
// function first() {
//     let count = 0;
//     setInterval(() => {
//         // count++;
//         // alert(`this is setinterval & alredy show in ${count} time`)
//     }, 3000)
// }
// first()

// function secound(){
//     setTimeout(() => {
//         alert('this is set time out')
//     }, 3000)
// }
// secound()

//fetch
fetch('https://jsonplaceholder.typicode.com/posts' , {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((data) => {
        console.log(data.json())
    } )
    .catch((err) => {
        console.log(err)
    })