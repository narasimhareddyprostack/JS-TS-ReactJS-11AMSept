let employees=[
    {
        "eid": 1,
        "ename": "Rahul",
        "gender": "Male"
    },
    {
        "eid": 2,
        "ename": "Sonia",
        "gender": "Female"
    },
    {
        "eid": 3,
        "ename": "Priyanka",
        "gender": "Female"
    },
    {
        "eid": 4,
        "ename": "Modi",
        "gender": "Male"
    },
    {
        "eid": 5,
        "ename": "Amith",
        "gender": "Male"
    },
    {
        "eid": 6,
        "ename": "Alia",
        "gender": "Female"
    },
    {
        "eid": 7,
        "ename": "Keerty Suresh",
        "gender": "Female"
    },
    {
        "eid": 8,
        "ename": "Rashmika Mandanna",
        "gender": "Female"
    },
    {
        "eid": 9,
        "ename": "Nayanatara",
        "gender": "Female"
    },
    {
        "eid": 10,
        "ename": "Vijay Setupathi",
        "gender": "Male"
    },
    {
        "eid": 11,
        "ename": "Vijay",
        "gender": "Male"
    },
    {
        "eid": 12,
        "ename": "Ajith",
        "gender": "Male"
    },
    {
        "eid": 13,
        "ename": "Pawan kalyan",
        "gender": "Male"
    },
    {
        "eid": 14,
        "ename": "Allu Arjun",
        "gender": "Male"
    },
    {
        "eid": 15,
        "ename": "Mr Revanth Reddy",
        "gender": "Male"
    },
    {
        "eid": 16,
        "ename": "Rukmini",
        "gender": "Female"
    },
    {
        "eid": 17,
        "ename": "KTR",
        "gender": "Male"
    },
    {
        "eid": 18,
        "ename": "Chandrababu",
        "gender": "Male"
    },
    {
        "eid": 19,
        "ename": "Jagan",
        "gender": "Male"
    },
    {
        "eid": 20,
        "ename": "DK Shiva",
        "gender": "Male"
    }
]
/*
    1.WAP to print no of Male employees
    2.WAP to print no of Female employees
    using
    a)for loop
    b)while loop
    c)for-of
*/
let mCount=0;
let fCount=0;
for( emp of employees){
    if(emp.gender==="Male"){
        mCount=mCount+1
    }
    if(emp.gender==="Female"){
        fCount++;
    }
}
console.log("No of Male Employees:",mCount)
console.log("No of Feale Employees:",fCount)