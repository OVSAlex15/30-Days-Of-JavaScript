console.log(countries)


const first_array = []
const second_array = [1, 2, 3, 4, 5, 6]
console.log(second_array.length)
console.log(second_array[0], second_array[2], second_array[second_array.length-1])

const mixedDataTypes = [1,'name', [1,2], {'ilya': 'Sher'}, true]
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length-1])

for (let i=0; i< itCompanies.length; i++) {
   console.log(itCompanies[i]) 
}

for (let i=0; i< itCompanies.length; i++) {
    var k = itCompanies[i]
    console.log(k.toUpperCase())
 }



let company = 'Ether'
let index = itCompanies.indexOf(company)

if (index === -1){
    console.log('the company is not found')
} else{
    console.log(company)
}

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