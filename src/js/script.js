//1
let myAge = 15;
console.log(myAge);
//2
let myName = "Max";
console.log(myName);
//3
let isStudent = true;
console.log(isStudent);
//4
let myString = "Мотивацію нада підняти!!!";
console.log(myString);
//5
let myNumber = 18 + 14;
console.log(myNumber);
//
let myNumberTwo = 32;
let myNumberSum = myNumberTwo + 10;
console.log(myNumberSum);
//6
let myNull = null;
console.log(myNull);
//7
const message = "Ведіть ваше ім'я";
let userName = prompt(message);
console.log(userName);
alert("Вітаємо-" + userName);
//8
const messageTwo = "Дія небезпечна";
const userChoise = confirm(messageTwo);
if (userChoise) {
  alert("Дякую за пітвердження!");
} else {
  alert("Дію відмінено");
}

//9
alert("Ця дія небезпечна, пітвержіть вхід");

const confirmation = confirm("Ви впевнені?");

if (confirmation) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
