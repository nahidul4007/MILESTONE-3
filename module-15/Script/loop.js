for(let number=0; number<=20; number++){
    console.log(number,'nothing')
}

//  add number with for loop
for(let num=0; num<=20; num++){
    if(num%2===0){
         console.log('even number : ',num)
    }
    else{
        console.log("ODD NUMBER : ",num)
    }
}


// 11 to 20 number ar sum
sum=0
for(let num=11; num<=20;num++){
    sum=sum+num
}
console.log("your Answer is: ",sum)


// while loop diya same 
whil=0;
i=11;
while(i<=20){
    whil=whil+i
    i++
}
console.log("your while sum is :",whil)


// decrimental for loop

// 11 to 20 number ar sum
sum=0
for(let num=20; num>=11;num--){
    sum=sum+num
}
console.log("your Answer is: ",sum)


// while loop diya same 
whil=0;
i=20;
while(i>=11){
    whil=whil+i
    i--
}
console.log("your while sum is :",whil)
console.log("---------------------------------------")


// different way to use loop 
var sum=0;
for(let num=0; num<=20; num++){
    if(num%3===0){
        console.log(num)
        sum=sum+num
    }
    else{
        console.log('none')
    }
}
console.log(sum)