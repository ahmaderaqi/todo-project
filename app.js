var name1 = prompt("Insert your name");
var gender = prompt("insert your gender");
var age = prompt("insert your age");

var question1=prompt("do you like cheese?");
var question2=prompt("do you like tomato?");
var question3=prompt("do you like potato?");

function validd(v){
    if(v.length==0){
        v="invalid"
    }
    return v;

}

 



var confirmation = confirm("do you want to skip the welcoming message?");
if (!confirmation) {
    if (gender == "male") {
        alert("welcome mr. " + name1);
    }
    else if (gender == "female") {
        alert("welcome ms. " + name1);
    }
    else {
        alert("welcome " + name1);
    }
}


console.log(confirmation);

question1= validd(question1);
 question2= validd(question2);
 question3= validd(question3);

 const questions= [question1, question2, question3];

function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printArray(questions);

