
let date = new Date();// creates date obj
let day = ("0" + date.getDate()).slice(-2);// gets day of month
let month = ("0" + (date.getMonth() + 1)).slice(-2);//gets month
let year = date.getFullYear();//gets year
let doneDate= day+"/"+month+"/"+year;// combines values

console.log("hello world! they date is: "+ doneDate);// outputs