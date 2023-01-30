function myReplace(){
let text="TECHlarious is hosting a fullstack MERN bootcamp, and MERN is very popular.";
const myArray=text.split("MERN");
const myString=myArray.join("MEAN");
return myString;
}
console.log(myReplace());

function myConcat(){
let txt1="Siba";
let txt2="Sharaf Eddeen";
const fullName=txt1+" "+txt2;
return fullName;
}
console.log(myConcat());