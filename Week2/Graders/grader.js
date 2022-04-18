//Simple grader by jake coffey 4/17/22 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function check(grade){
    let valid=true;
    if(grade>100||grade<0){
        console.log("Grade must be between 0 and 100!");
        valid = false;
    }
    
    return valid;
}

readline.question('Please input student name:', (student) => {

        readline.question(`Please enter ${student}s grade:`, (stGrade) => {
            if(check(stGrade)){
                if(stGrade<60){
                    console.log(`${student} got an D :(`); 
                }
                else if (stGrade<70&&stGrade>=60){
                    console.log(`${student} got a D :/`); 
                }
                else if (stGrade<80&&stGrade>=70){
                    console.log(`${student} got a C :L`); 
                }
                else if (stGrade<90&&stGrade>=80){
                    console.log(`${student} got a B :)`); 
                }
                else  {
                    console.log(`${student} got an A :)!!`); 
                }
            }
        readline.close();
        });
    });
