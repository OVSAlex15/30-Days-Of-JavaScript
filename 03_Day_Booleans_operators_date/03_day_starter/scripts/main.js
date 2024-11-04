let firstName = 'Artem'
let lastName = 'Artemyev'
let country = 'Russia'
let city = 'Moscow'
let age = 22
let isMarried = false
let year = 2002

console.log(typeof('10') == 10)
console.log(parseInt('9.8') == 10)

console.log(5>3)
console.log(!false)
console.log('sasha' === 'sasha')

console.log(5<3)
console.log(!true)
console.log('sasha' === 'Sasha')

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4 != '4')
console.log(4 =='4')
console.log(4 === '4')
console.log('python'.length > 'jargon'.length)


console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('dragon'.match('on')))
console.log(!('python'.match('on')))

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getMinutes())
console.log(now.getTime())

let base = prompt('Enter base: ')
let height = prompt('Enter height: ')
let area1 = 0.5 * base * height
console.log(`The area of the triangle is ${area1}`)


let sideA = Number(prompt('Enter side a: '))
let sideB = Number(prompt('Enter side b: '))
let sideC =Number(prompt('Enter sice c: '))
let perimeter = sideA+sideB+sideC
console.log(`The perimeter of the triangle is ${perimeter}`)

let length = Number(prompt('enter length'))
let width = Number(prompt('Enter width'))
let area = length * width + 2*(length+width)
console.log(area)


let radius = Number(prompt('enter radius'))
console.log(Math.PI * radius * radius)
console.log(2*Math.PI*radius)


const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;

const slope = (y2 - y1) / (x2 - x1);
console.log(`Slope between (2, 2) и (6, 10): ${slope}`);

let hours2 = Number(prompt('enter hours: '))
let rate = Number(prompt('enter rate per h: '))
console.log(`Your weekly earning is ${hours2*rate}`)


if (firstName.length > lastName.length){
    console.log(`Your first name , ${firstName} is longer than your family name, ${lastName}`)
}else{
    console.log(`Your family name , ${lastName} is longer than your first name, ${firstName}`)
}

let myAge = 225
let yourAge = 25
console.log(`I am ${myAge-yourAge} years older than you`)


let byear = Number(prompt('Enter birth year: '))
const year1 = now.getFullYear()
if(year1 - byear >= 18){
    console.log(`You are ${year1 - byear}. You are old enough to drive`)
}else{
    console.log(`You are ${year1 - byear}. You will be allowed to drive after ${18-year1 - byear} years.`)
}



const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${year1}-${month}-${date} ${hours}:${minutes}`) 
console.log(`${date}-${month}-${year1} ${hours}:${minutes}`) 
console.log(`${date}/${month}/${year1} ${hours}:${minutes}`) 


const month1 = String(now.getMonth() + 1).padStart(2, '0')
const day1 = String(now.getDate()).padStart(2, '0')
const hours1 = String(now.getHours()).padStart(2, '0')
const minutes1 = String(now.getMinutes()).padStart(2, '0')

console.log(`${year1}-${month1}-${day1} ${hours1}:${minutes1}`)