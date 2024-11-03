// this is your main.js script

let challenge = '30 days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,6))
console.log(challenge.substring(3,21))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(", "))
console.log(challenge.replace("JavaScript", 'Python'))
console.log(challenge.indexOf('a'))
challenge.charAt(15)
console.log(challenge.charCodeAt(challenge.length -1))
console.log(challenge.indexOf("3"))
console.log(challenge.trim(" "))
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("Script"))
console.log(challenge.match('a'))
let string1 = '30 Days of '
console.log(string1.concat('JavaScript'))
console.log(challenge.repeat(2))

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to \help\ one another.')
console.log('\"Love is not patronizing and charity isn`t about pity, it is about love. Charity and love are the same -- with charity you give love, so don`t just give money but reach out your hand instead.\"')
let strNum = '10'
console.log(strNum)
console.log(typeof strNum === 'number')
if (typeof strNum !== 'number') {
  strNum = Number(strNum)
}


let num = parseFloat('9.8');
if (num !== 10) {
  num = Math.round(num);
}
console.log(num);

let string2 = 'python'
let string3 = 'jargon'
console.log(string2.includes('on'))
console.log(string3.includes('on'))

let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))


let randomNum1 = Math.floor(Math.random() * 101)        
console.log(randomNum1)         

let randomNum2 = Math.floor(Math.random()*51) +50
console.log(randomNum2)

let randomNum3 = Math.floor(Math.random() * 256)
console.log(randomNum3)

let jsString = "JavaScript"
let randomIndex = Math.floor(Math.random() * jsString.length)
console.log(jsString[randomIndex])

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

let string4 = 'You cannot end a sentence with because because because is a conjunction'

console.log(string4.substring(30,54))

let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi

console.log(loveString.match(pattern).length)

let pattern1 = /because/gi
let becauseString = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseString.match(pattern1).length)

const sentence5 = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;


const cleanedText = sentence5.replace(/[^a-zA-Z\s]/g, "");


const words = cleanedText.toLowerCase().split(/\s+/);


const wordCounts = {};
for (const word of words) {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
}


let mostFrequentWord = "";
let maxCount = 0;
for (const [word, count] of Object.entries(wordCounts)) {
  if (count > maxCount) {
    mostFrequentWord = word;
    maxCount = count;
  }
}

console.log(`Most frequent word: "${mostFrequentWord}" with ${maxCount} occurrences.`);

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';


const numbers = text.match(/\d+/g).map(Number);


const monthlySalary = numbers[0] * 12;   
const annualBonus = numbers[1];         
const monthlyCourses = numbers[2] * 12;  

const totalAnnualIncome = monthlySalary + annualBonus + monthlyCourses;

console.log(`Total annual income: ${totalAnnualIncome} euros`);
