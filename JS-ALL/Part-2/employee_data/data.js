const employees = [
	{ eid: 1, ename: "Aarav Sharma", age: 29, esal: 850000, gender: "Male" },
	{ eid: 2, ename: "Ananya Rao", age: 31, esal: 920000, gender: "Female" },
	{ eid: 3, ename: "Vikram Singh", age: 35, esal: 780000, gender: "Male" },
	{ eid: 4, ename: "Meera Nair", age: 28, esal: 880000, gender: "Female" },
	{ eid: 5, ename: "Kabir Khan", age: 40, esal: 1250000, gender: "Male" },
	{ eid: 6, ename: "Ishita Patel", age: 27, esal: 760000, gender: "Female" },
	{ eid: 7, ename: "Rohan Mehta", age: 33, esal: 950000, gender: "Male" },
	{ eid: 8, ename: "Kavya Iyer", age: 30, esal: 820000, gender: "Female" },
	{ eid: 9, ename: "Arjun Verma", age: 38, esal: 1100000, gender: "Male" },
	{ eid: 10, ename: "Nisha Kapoor", age: 32, esal: 980000, gender: "Female" },
	{ eid: 11, ename: "Aditya Deshmukh", age: 26, esal: 730000, gender: "Male" },
	{ eid: 12, ename: "Tara Kulkarni", age: 34, esal: 890000, gender: "Female" },
	{ eid: 13, ename: "Manav Joshi", age: 29, esal: 840000, gender: "Male" },
	{ eid: 14, ename: "Priya Menon", age: 36, esal: 1020000, gender: "Female" },
	{ eid: 15, ename: "Siddharth Reddy", age: 41, esal: 1180000, gender: "Male" },
	{ eid: 16, ename: "Diya Chatterjee", age: 25, esal: 790000, gender: "Female" },
	{ eid: 17, ename: "Yash Malhotra", age: 31, esal: 910000, gender: "Male" },
	{ eid: 18, ename: "Simran Kaur", age: 28, esal: 870000, gender: "Female" },
	{ eid: 19, ename: "Neel Bhatia", age: 37, esal: 800000, gender: "Male" },
	{ eid: 20, ename: "Riya Banerjee", age: 30, esal: 940000, gender: "Female" }
];

//Write  a javascript display employees data in the form html table
function display_data(){
    let rows=""
    for (const emp of employees) {
            rows=rows+`<tr>
                            <td>${emp.eid}</td>
                            <td>${emp.ename}</td>
							<td>${emp.age}</td>
                            <td>${emp.esal}</td>
                            <td>${emp.gender}</td>
                       </tr>`
    }
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
    //document.getElementsByTagName('tbody')[0].innerHTML=rows;
	//document.getElementsByClassName('abc')[0].innerHTML=rows;
	document.querySelector("#abc").innerHTML=rows;
   
}