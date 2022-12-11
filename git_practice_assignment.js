let prime = 13
    let i = 1;
    let count = 0;
    while(i<=prime){
        if(prime%i===0){
            count++;
        }
        i++;
    }
    if(count===2){
        console.log("Yes");
    }else{
        console.log("No")
    }