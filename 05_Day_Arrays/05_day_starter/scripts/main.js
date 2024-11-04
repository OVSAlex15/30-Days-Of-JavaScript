
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


const first_array = Array()
const second_array = [1, 2, 3, 4, 5, 6]
console.log(second_array.length)
console.log(second_array[0], second_array[2], second_array[second_array.length-1])

const mixedDataTypes = [1,'name', [1,2], {'ilya': 'Sher'}, true, 1.5]
console.log(mixedDataTypes.length)


var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length+1)
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length-1])

for (let i=0; i< itCompanies.length; i++) {
   console.log(itCompanies[i]) 
}

for (let i=0; i< itCompanies.length; i++) {
    var k = itCompanies[i]
    console.log(k.toUpperCase())
 }

 console.log(`${itCompanies} are big IT companies `)


 let companyexist = 'Ether'
let index = itCompanies.indexOf(companyexist)

if (index === -1){
    console.log('the company is not found')
} else{
    console.log(company)
}

var filteredCompanies = [];

for (var i = 0; i < itCompanies.length; i++) {
  var company = itCompanies[i];
  var oCount = 0;
  
  
  for (var j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      oCount++;
    }
  }
  

  if (oCount <= 1) {
    filteredCompanies.push(company);
  }
}

console.log(filteredCompanies);

itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)


console.log(itCompanies.slice(0,2))
console.log(itCompanies.slice(itCompanies.length-4, itCompanies.length-1))
console.log(itCompanies.slice(3))

console.log(itCompanies.splice(0,1))
console.log(itCompanies.splice(3,4))
console.log(itCompanies.splice(itCompanies.length-4, itCompanies.length-1))
console.log(itCompanies.splice())



let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[.,]/g, '').split(' ')

console.log(words);     
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}


if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}

const allergicToHoney = true;
if (allergicToHoney && shoppingCart.includes('Honey')) {
    const honeyIndex = shoppingCart.indexOf('Honey')
    shoppingCart.splice(honeyIndex, 1)
}

const teaIndex = shoppingCart.indexOf('Tea')
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea'
}

console.log(shoppingCart)

if(countries.includes('Ethiopia') == true){
    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
    console.log(countries)
}

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)

let median = Number((ages[4] + ages[5]) / 2)
for(let i = 0; i < ages.length; i++){
    let summa = 0
    summa+=ages[i]
}

let average = Number(summa/ages.length+1)

let range = Number( ages[0]-ages[ages.length-1])

let min_average = Number(ages[ages.length-1] - average)

let max_average = Number(ages[0] - average)

function difference(a,b){
    return Math.abs(a-b)
}

difference(min_average,max_average)