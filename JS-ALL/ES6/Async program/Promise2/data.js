let employees=[
    {"eid":101,"ename":"Rahul","esal":45000},
    {"eid":102,"ename":"Sonia","esal":55000}
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag===true?resolve("Data Inserted"):reject("Failed")
            employees.push(emp)
        },4000)
    })
}
let getEmployees=()=>{
     setTimeout(()=>{
        let rows=""
        for (const emp of employees) {
            rows=rows+`<tr>
                           <td>${emp.eid}</td>     
                           <td>${emp.ename}</td>     
                           <td>${emp.esal}</td>     
                        </tr>`
        }
        document.getElementById('empdata').innerHTML=rows
     },1000)
}
createEmployee({"eid":103,"ename":"Priya","esal":65000})
.then((msg)=>{
    getEmployees()
    console.log(msg)
})
.catch((err)=>{console.log(err)})
