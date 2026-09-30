let emp={
    eid:101,
    ename:"Rahul",
    email:"rg@gmail.com"
}
let details={
    esal:45000.00,
    email:"rg@ibm.com"
}
let emp_details={...emp,...details}
console.log(emp_details)