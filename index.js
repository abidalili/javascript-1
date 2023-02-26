// let scores = [80, 3, 5, 900, 6, 8, 10, 56];
// function highestScore(scores) {
//   let highestScore = 0;
//   for (i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i];
//     }
//   }

//   return highestScore;
// }
// console.log(highestScore(scores));
// // // // shift is opposite of pop
// // // names.shift();
// // // console.log(names);

// // // names.unshift("shagor");
// // // console.log(names);
// nums.sort(function (a, b) {
//   return a - b;
// });
// console.log(nums);

//2d Array
/*
let array1 = [
  ["ashraful", 95],
  ["sakib", 15],
  ["musfiq", 91],
  ["mashrafe", 17605],
];
let array2 = [
  ["muhuibul", 95],
  ["sakibul", 15],
  ["musfiqul", 91],
  ["mashrafeul", 5],
];

function calculator(xyz) {
  let highestScore = 0;
  let name = "";
  for (let i = 0; i < xyz.length; i++) {
    for (let j = 0; j < 1; j++) {
      if (xyz[i][1] > highestScore) {
        highestScore = xyz[i][1];
        name = xyz[i][0];
      }
    }
  }

  console.log(name);
}

calculator(array2); 
*/

/*
let PlayersInfo = [
  ["ashraful", 95],
  ["sakib", 15],
  ["musfiq", 91],
  ["mashrafe", 17605],
];
function highestRunScorer(PlayersInfo) {
  let highestScorer = PlayersInfo[0][0];
  let highestScore = PlayersInfo[0][1];

  for (let x = 1; x < PlayersInfo.length; x++)
    if (highestScore < PlayersInfo[x][1]) {
      highestScore = PlayersInfo[x][1];
      highestScorer = PlayersInfo[x][0];
    }

  return highestScorer;
}

let name = highestRunScorer(PlayersInfo);
console.log(name);
*/

//object (student details)
// let student111 = {
//   name: "Anisul Islam",
//   age: 27,
//   cgpa: 3.92,
//   lang: ["bengali", "hindi", "english"],
// };
// console.log(student1.age);

//property tamplate if i use same info many times
// eta korte hole constructor use kora hoy. ekhon dekhbo how to use constructor?
// how to create a constructor

// function Student(name, age, cgpa, lang) {
//   this.name = name;
//   this.age = age;
//   this.cgpa = cgpa;
//   this.lang = lang;
//   //function in a constructor

//   this.display = function () {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.cgpa);
//     console.log(this.lang);
//   };
// }
// let student1 = new Student("anisul islam", 37, 3.99, ["ben", "eng", "finnish"]);

// let student2 = new Student("abida aktar", 26, 3.91, [
//   "beng",
//   "eng",
//   "hindi",
//   "finnish",
// ]);

// let student3 = new Student("hasan md", 31, 3.88, ["beng", "eng"]);
// // to print

// //calling a function for any variable

// student2.display();
// student3.display();
