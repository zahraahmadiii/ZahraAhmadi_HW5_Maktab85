let pedameter={

    step:0,
    
    increase:function(){
        this.step+=1 
        return this; 
    },
    decrease:function(){
       this.step-=1
       return this; 
    },
    reset:function(){
     this.step=0
     return this; 
    },
    read:function(){
    console.log(this.step);
    return this; 
    }

}

pedameter.increase().increase().read().decrease().read()
.increase().reset().read()


