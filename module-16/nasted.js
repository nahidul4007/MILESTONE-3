const school={
    name:"ndndnd",
    class:["10",'11','12','155'],
    event:['science','arts','bijoy dibos'],
    unique:{
        color:"blue",
        result:{
            gpa:5,
            cgpa:4,
            status:"fail"
        }
    }
}
console.log(school.unique.color)
console.log(school.unique.result)
console.log(school.unique)
school.unique.result.gpa="boss"
console.log(school.unique.result.gpa)
delete school.event;
console.log(school)




