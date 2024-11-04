

function fullName(name,surname){
    let polnoe = ` ${name} ${surname}`
    return polnoe
}

console.log(fullName('Alex','Ovs'))

function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
addNumbers(13,26)

function areaOfRectangle(arg1,arg2){
    return arg1*arg2
}
console.log(areaOfRectangle(2,5))

function perimeterOfRectangle(length, width){
    return 2*(length + width)
}
console.log(perimeterOfRectangle(2,4))

function volumeOfRectPrism(length,width,height){
    return length * width * height
}
console.log(volumeOfRectPrism(1,2,3))

function areaOfCircle(r){
    return Math.PI * r * r
}
console.log(areaOfCircle(2))

function circumOfCircle(r){
    return 2* Math.PI * r
}
console.log(circumOfCircle(3))

function density(mass,volume){
    let density1 = mass / volume
    return density1
}

console.log(4,2)

function speed(time, distance){
    let speed = distance/time
    return speed
}
console.log(speed(10,5))

function weight(mass,gravity){
    return mass * gravity
}
console.log(2,10)


function index(weight,height){
    let bmi = weight / (height **2)
    if (bmi < 18.5){
        console.log('You are underweight')
    } else if( bmi >= 18.5 && bmi < 24.9){
        console.log('You`re normal')
    } else if(bmi >= 25 && bmi < 29.9){
        console.log('You`re overweight')
    }else{
        console.log('You`re жирдяй')
    }
}
index(64,1.7)


const fall = ['september','oktober','november']
const winter = ['december','january','february']
const spring = ['march','april','may']
const summer = ['june','july','august']


function checkSeason(month){
    if(fall.includes(month) == true){
        console.log('Autumn')
    }else if(winter.includes(month) == true){
        console.log('Winter')
    }else if(spring.includes(month) == true){
        console.log('Spring')
    }else{
        console.log('Summer')
    }
}
checkSeason('oktober')

function findMax(a,b,c){
    let max = a
    if(b>max){
        max = b
        
    }else if (c>max){
        max = c
        
    }
    return max
}
console,log(findMax(8,0,1))

