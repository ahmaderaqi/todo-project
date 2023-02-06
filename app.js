var name1 = prompt("Insert your name");
var gender = prompt("insert your gender");
var age = prompt("insert your age");

if(age<=0){
    alert("wrong age, it should'n be negative or zero");
    age = prompt("insert your age again");
}

if(gender=="male"){
    alert("welcome mr. "+ name1);
}
else if(gender=="female"){
    alert("welcome ms. "+ name1);
}
else{
    alert("welcome " + name1);
}

