// function ask(question,yes,no){
//     if(confirm(question)) yes();
//     else no();
// }
// ask(
//     "Do you agree?",
//     function(){alert("you agreed.");},
//     function(){alert("you canceled the execution.");}
// );

// arrow function

let ask=(question,yes,no) => {
    if(confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    ()=>{alert("you agreed.");},
    ()=>{alert("you canceled the execution.");}
);