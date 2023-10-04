let x = Math.random() * 100;

let user = prompt("Enter the number to guess right number:- ");

if(x == user){
  console.log("Hurrah !! You are right");
}
else{
  console.log("Oops ! sorry, Your guess is wrong, Please Do it again");
}