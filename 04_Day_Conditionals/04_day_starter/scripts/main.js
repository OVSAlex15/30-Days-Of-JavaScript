let age = Number(prompt('Enter your age'))
if(age >= 18){ 
    console.log('You are old enough to drive')
}else{
    let to_wait =Number(18-age)
    console.log(`You are left with ${to_wait} years to drive.`)
}

let my_age = 16
if(age>my_age){
    let razniza =Number(age-my_age)
    console.log(`You are ${razniza} years older than me`)
}else{
    let razniza1 = Number(my_age-age)
    console.log(`I am ${razniza1} years older than you`)
}

let a = 3
let b = 5

if (a>b){
    console.log('a is greater than b')
}else{
    console.log('b is greater than a')
}

let greater = a>b
greater
    ? console.log('a is greater than b')
    : console.log('b is greater than a')


let number = Number(prompt('Enter a number: '))
let sravnenie = number%2 == 0
sravnenie
    ? console.log(`${number} is an even number`)
    : console.log(`${number} is an odd number`)




let score = Number(prompt('enter your score: '))

if(score>=90){
    console.log('Your grade is A');
}else if(score>=70 && score<=89){
    console.log('Your grade is B');
}else if(score>=60 && score<=69){
    console.log('Your grade is C');
}else if(score>=50 && score<=59){
    console.log('Your grade is D');
}else{
    console.log('Your grade is F');
}

const fall = ['september','oktober','november']
const winter = ['december','january','february']
const spring = ['march','april','may']
const summer = ['june','july','august']

let month = prompt('What is the month today? ')

month = month.toLowerCase()

switch(true){
    case fall.includes(month):
        console.log('It is fall now');
        break;
    case winter.includes(month):
        console.log('It is winter now');
        break;
    case spring.includes(month):
        console.log('It is spring now');
        break;
    case summer.includes(month):
        console.log('It is summer now');
        break;
    default:
        break; 
}


const working = ['monday','tuesday','wednesday','thursday','friday']
let day = prompt('What is the day today?: ')
day.toLowerCase()
let sravn = working.includes(day)

if(sravn == true){
    console.log(`${day} is a working day`)
}else{
    console.log(`${day} is a weekend`)
}

const month31 = ['January','march','may','july','august','oktoer','december']
let month1 = prompt('Enter a month: ')
month1.toLowerCase()
if (month31.includes(month1) == true){
    console.log(`${month1} has 31 days`)
}else if(month1 == 'february'){
    console.log('february has 28 days')
}else{
    console.log(`${month1} has 30 days`)
}
