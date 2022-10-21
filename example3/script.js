

let userInfo=(username,age)=>{

    let user={
        username,
        age,
    }
    return user;
}
let user1=userInfo("mina",34)
let user2=userInfo("zahra",23)
let user3=userInfo("raha",45)

let array=[];
array.push(user1,user2,user3);
console.log(array);
array.sort((a,b)=> {
   
   if(a.age>b.age){
    return 1;
   }else{
    return -1;
   }
})
   
console.log(array);


    
