var isHungry;
isHungry = false;
let studentname;
studentname ="Kwabena";
let box = null;
let age = 42;

console.log(isHungry, studentname, box, age);
function NewAlert() {
    if (isHungry) {
          alert("It is "+ isHungry + "" +
          studentname + " isHungry");
   }
}

NewAlert();



{

}



alert(studentname + "is" + " yaers old.")




let x = "Adwoa";
let y =6;

let z =x + y;


z = x-y;

let b= x*y;

let c = x/y;

console.log(z);
console.log(b);
console.log(c);


//.tostring is used to convert
//content
// any variable to a string

let a = y . toString();
console.log(a);
console.log(typeof a);
console.log(typeof isHungry);
console.log(typeof studentname);
console.log(typeof box);

//Coverting Strings to a numbers
let example = "123student";
let nexample = parseInt(example);

console.log(nexample);

let future = example + 20;


future="123student20";

let newfuture = parseInt(future);

console.log(newfuture);



let newstring= "123.234student";
let stringNum=parseInt(newstring);

console.log(stringNum);

let newstringNum=parseFloat(newstring);

console.log(newstringNum);


console.log(typeof newstringNum);

let newAdd= stringNum / newstringNum;

console.log(newAdd);

let d = 40;
let t = "456";

console.log(d);
console.log(t);
 
let f= d+t;
console.log(f);

let school_names;
school_names=["Candyland School", "Dison International School", "New Mission Academy", "First Baptist School"]
console.log(school_names)

let school_location;
school_location = [
,
"Burma Hills",
,
"Tema Community 5"
];

console.log(school_location);

let dogName, dogAge, dogYears, catName, CatAge, catYears;
dogName = "Fido";
dogAge = 12;
dogYears = 7;
catName = "Whiskers";
catAge = 9;
catYears = 5;

let DogHumanYears = dogAge * dogYears;

console.log(DogHumanYears);

let CatHumanYears = catAge * catYears;

console.log(CatHumanYears);

console.log(dogName + " is "+ DogHumanYears + " human years old");

console.log(catName + " is "+ CatHumanYears + " human years old");

 


const newcar={
    hoursepower:{a:"100", b:"200"}, 
    strength:"500", 
    mileage:"1000",
};

console.log(newcar.hoursepower);
console.log(newcar.strength);
console.log(newcar.mileage);


const ghIdentity={
    FirstName: NewFirstName,
    Middlename: NewMiddleName,
    Lastname: NewlastName
}

let NewFirstName, NewMiddleName, NewlastName;
NewFirstName=prompt("Enter First Name");
NewMiddleName=prompt("Enter Middle Name");
NewLastName=prompt("Enter Last Name");


const newcar = {
    horsepower: "100",
    strength: "500",
    mileage: "1000",
  };
  
  
  
  
  const oldcar= {
    horsepower:"1500",
    strength:"2500",
    mileage:"50",
  };


//FROM THE ABOVE
//wHAT IS THE TOTAL HORSEPOWER FOR  BOTH CARS
//Find the total strength and mileage
//Find the product of the strength and 
//mileage of each car

totalhorsepower =parseInt(oldcar.horsepower) + parseInt(newcar.horsepower);

//total strength
let totalstrength = parseInt(oldcar.strength) + parseInt(newcar.strength);
//3000


//total mileage
let totalmileage = parseInt(oldcar.mileage) + parseInt(newcar.mileage)
//product1 is for new car
let product1 = parseInt(newcar.strength) * parseInt(newcar.mileage); //500000

//product2 is for old car
let product2 = parseInt(oldcar.strength) * parseInt(oldcar.mileage);
//


//product2

//total horsepower
//let totalhorsepower = 
//parseInt(oldcar.horsepower) + parseInt(newcar.horsepower) ;


console.log(newcar.hoursepower + oldcar.horsepower);
console.log(newcar.strength + oldcar.strength);
console.log(newcar.mileage + oldcar.mileage);

console.log(newcar.strength * oldcar.strength);
console.log(newcar.mileage * oldcar.mileage);