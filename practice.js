let name="shree";
let age=19;
let completedCollege=false
let skills=["l","m"];
console.log(name);
console.log(age);
console.log(completedCollege);
console.log(skills);
console.log(typeof age);
console.log(typeof skills);
console.log(typeof name);
console.log("my name is "+name);
console.log(`my age is ${age}`);
alert("hello");
const num1 = parseInt(prompt("enter num1"));
const num2 = parseInt(prompt("enter num2"));
result=num1+num2;
alert(`result is  ${result}`);


let name= prompt("enter name");
alert(`hey ${name}`);
const sampleText =['leo','lkg','kgf'];
console.log(sampleText);
console.log(sampleText.length);
console.log(sampleText[2]);
sampleText[2]="jawan";
console.log(sampleText);
sampleText.push("jailer");
console.log(sampleText);
sampleText.unshift("beast");
console.log(sampleText);
sampleText.pop()
console.log(sampleText);
sampleText.shift();
console.log(sampleText);
sampleText.splice(2,0,"beast");
console.log(sampleText);

let persons = [
    { name: 'janani', age: 10, city: 'New York' },
    { name: 'haritha', age: 20, city: 'Los Angeles' },
    { name: 'priya', age: 30, city: 'Chicago' }
  ];
  persons.forEach((value,index) => {
    if(value.age>=20){
    console.log(value)
    }
})

  persons.forEach((value,index) => {
    if(value.name.length>=6){
    console.log(value)
    }
})
 
let movies = [
    { title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
    { title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
  ];
   movies.forEach((value,index) => {
    if(value.year>=1990){
    console.log(value)
    }
})

movies.forEach((value,index) => {
    if(value.year==1994){
    console.log(value)
    }
})

let persons = [
    { id:1,name: 'John', age: 25},
    { id:2,name: 'Ja', age: 30 },
    { id:3,name: 'Mike', age: 28 },
  ];
  persons.forEach((value,index) => {
    if(value.name.length>=3){
    console.log(value)
    }
  })

const programminglanguages = [
    { name: 'Javascriptn',type: 'cripting',year:1995 },
    { name: 'Python',type: 'Scripting', year:1991  },
    { name: 'Java',type: 'Compiled',year:1995  },
    { name: 'C++', type: 'Compiled',year:1985  },
  ];
  programminglanguages.forEach((value,index) => {
    if(value.year>=1990 && value.type =='Compiled'){
    console.log(value)
    }
  })


