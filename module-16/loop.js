const mobile={
    brand:"samsung",
    price:1200,
    color:"black",
    isnew:true
}
//  for of : array ar moddhe use kora jai . 
//  for in : object ar moddhe use kora jai . 

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}
//  OBJECT TO ARAY

const keys =Object.keys(mobile);
console.log(keys)
for(const key of keys){
    console.log(key,":",mobile[key])
}









for(const key of keys){
    console.log(key)
    if(key==="color"){
        console.log('Paiya gase mama tomar color')
        break;

    }
    else{
        console.log('nah re bap . color pailam nah ')
    }
}


