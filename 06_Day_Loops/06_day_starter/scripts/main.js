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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']






for (let i = 0; i <11; i++){
    console.log(i)
}
let k = 0
while(k <= 10 ){
    console.log(k)
    k++
}
let x = 10
do{
    console.log(x)
    x--
} while (x >= 0)

let n = 15
for (let v = 0; v < n+1; v++){
    console.log(v)
}
let reshetka = '#'
let stroka = ''
for (let w = 1; w < 8; w++){
    stroka += reshetka
    console.log(stroka)
}

for(let r = 0; r <= 10; r++){
    console.log(`${r} * ${r} = ${r * r}`)
  }
console.log('i i^2 i^3')
for (i = 0; i<11;i++)[
    console.log( i ,i ** 2, i **3)
]
for (i = 0; i < 101;i++){
    if(i%2 == 0){
        console.log(i)
    }
}

for (i = 0; i < 101;i++){
    if(i%2 == 1){
        console.log(i)
    }
}
    
let primes = [2,3,5,7,11,13,17,19,23,29,31,37,41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,97]

let summa = 0
for (i = 0; i<101; i++){
    if (primes.includes(i) == true){
        console.log(i)
    }  
}
for (i = 0; i<101; i++){
    summa += i
}
console.log(`The sum of all numbers from 0 to 100 is ${summa}`)

let even_sum = 0
let odd_sum = 0
for (i = 0; i<101; i++){
    if (i % 2 ==0){
        even_sum += i
    }else{
        odd_sum += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${even_sum}. And the sum of all odds from 0 to 100 is ${odd_sum}`)

let randomNumbers = []
for (i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100))
}
console.log(randomNumbers.toString())


let uniqueRandomNumbers = new Set()
while (uniqueRandomNumbers.size < 5) {
    uniqueRandomNumbers.add(Math.floor(Math.random() * 100))
}
console.log(Array.from(uniqueRandomNumbers))


let randomId = Math.random().toString(36).substring(2, 8) 
console.log(randomId)

function randomIdMaker(a,b){
    let randomIdMake = Math.random().toString(36).substring(a, b)
console.log(randomIdMake)
}

randomIdMaker(2,10)

