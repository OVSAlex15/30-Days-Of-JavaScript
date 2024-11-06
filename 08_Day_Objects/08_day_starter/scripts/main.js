
const dog = {
    
}
console.log(dog)

dog.name = 'Chery'
dog.legs = 4
dog.color = 'Brown'
dog.age = 7
dog.bark = 'woof woof'

console.log(dog)
dog.getDogsName =  function(){
    return `${this.name}`
}

dog.getDogInfo = function(){
    return `${this.breed}`
}


console.log(dog.getDogsName())

dog.breed = 'Beagle'

console.log(dog.getDogInfo())

 const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  


let mostSkilledUser = '';
let maxSkills = 0;

for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    mostSkilledUser = user;
  }
}

console.log(`User with the most skills: ${mostSkilledUser}`);

let loggedInCount = 0;
let highPointsCount = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInCount++;
  }
  if (users[user].points >= 50) {
    highPointsCount++;
  }
}

console.log(`Number of logged in users: ${loggedInCount}`);
console.log(`Number of users with 50 or more points: ${highPointsCount}`);

const mernDevelopers = [];

for (const user in users) {
  const skills = users[user].skills;
  if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
    mernDevelopers.push(user);
  }
}

console.log(`MERN stack developers: ${mernDevelopers.join(', ')}`);

const updatedUsers = { ...users, MyName: { email: 'myemail@example.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 25, isLoggedIn: true, points: 100 } };

console.log('Updated users object:', updatedUsers);

const userKeys = Object.keys(users);
console.log('Keys of users object:', userKeys);

const userValues = Object.values(users);
console.log('Values of users object:', userValues);



for (const country in countries) {
  const { capital, population, languages } = countries[country];
  console.log(`${country} - Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
}