// // // // // // // // // // // /*
// // // // // // // // // // // from (vuhdvuhj)
// // // // // // // // // // // = [v, u, h...]
// // // // // // // // // // // */

// // // // // // // // // // // var name = "MANCHO";
// // // // // // // // // // // var Arr = Array.from("MANCHO")

// // // // // // // // // // // console.log(Arr)

// // // // // // // // // // // var but = Array.from("12345")

// // // // // // // // // // // console.log(but)


// // // // // // // // // // // Array.isArray() 

// // // // // // // // // // var fruits = ["Orange", "Banana", 'Watermelon'];

// // // // // // // // // // var fruit = "Orange";

// // // // // // // // // // console.log(Array.isArray(fruits));
// // // // // // // // // // console.log(Array.isArray(fruit));


// // // // // // // // // // concat()

// // // // // // // // // var one = ["a", "b", "c"];
// // // // // // // // // var two = ["d", "e", "f"];

// // // // // // // // // console.log(one.concat(two))


// // // // // // // // // fill method

// // // // // // // // var test = ["Orange", "Banana", 'Watermelon']

// // // // // // // // console.log(test.fill("pie", 0, 3))

// // // // // // // filter method

// // // // // // var num = [1, 2, 3, 4, 5, 6];

// // // // // // const result = num.filter(element => element >= 3)

// // // // // // console.log(result)

// // // // // // var test = ["Orange", "Banana", 'Watermelon']

// // // // // // const pant = test.filter(word => word.length >= 10)

// // // // // // console.log(pant)



// // // // // var num = [1, 2, 3, 4, 5, 6];

// // // // // const result = num.find(element => element <= 6)

// // // // // console.log(result)


// // // // for each

// // // an object is a collection of d-ata with- --n--- properties like name and value

// // there are 4 types  of Object
// // User defined Object
// // Native obj
// // host obj
// // document obj

// // object literal
// // var studentnam ={ Name: "Buns", School: "Eggroll University", Study: "Baking"};

// function Person(name,school,study){
//   this.name = name;
//   this.school = school;
//   this.study = study;
// }
// var john = new Person("promise", "aub", "computer science" );

// var jonah = new Person("jonah", "aub", "management science" );

// console.log(john)
// console.log(jonah)


// let students = {
//   Name: "Mancho",
//   Class:"JSS1",
//   School: "Badagry Junior Grammar School",
//   Subjects: ["Mathematics", "English", "French", "Chemistry", "Biology", "Physics"]
// }

// console.log(students.Name);

// students.Subjects.forEach(function(Element){
//   console.log(Element)
// })


// var num =[1 ,2 ,3 ,4 ,5]

// num.forEach(function(element, Accumulator){
//   Accumulator += element;
//   console.log(Accumulator)
// })


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for(i= 0; i < arr.length; i ++){
  if(i % 2 === 0);
  arr.push(i);
}

console.log(arr)