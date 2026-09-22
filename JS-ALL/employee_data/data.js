const employees = [
	{ eid: 1, ename: "Aarav Sharma", esal: 850000, gender: "Male" },
	{ eid: 2, ename: "Ananya Rao", esal: 920000, gender: "Female" },
	{ eid: 3, ename: "Vikram Singh", esal: 780000, gender: "Male" },
	{ eid: 4, ename: "Meera Nair", esal: 880000, gender: "Female" },
	{ eid: 5, ename: "Kabir Khan", esal: 1250000, gender: "Male" },
	{ eid: 6, ename: "Ishita Patel", esal: 760000, gender: "Female" },
	{ eid: 7, ename: "Rohan Mehta", esal: 950000, gender: "Male" },
	{ eid: 8, ename: "Kavya Iyer", esal: 820000, gender: "Female" },
	{ eid: 9, ename: "Arjun Verma", esal: 1100000, gender: "Male" },
	{ eid: 10, ename: "Nisha Kapoor", esal: 980000, gender: "Female" },
	{ eid: 11, ename: "Aditya Deshmukh", esal: 730000, gender: "Male" },
	{ eid: 12, ename: "Tara Kulkarni", esal: 890000, gender: "Female" },
	{ eid: 13, ename: "Manav Joshi", esal: 840000, gender: "Male" },
	{ eid: 14, ename: "Priya Menon", esal: 1020000, gender: "Female" },
	{ eid: 15, ename: "Siddharth Reddy", esal: 1180000, gender: "Male" },
	{ eid: 16, ename: "Diya Chatterjee", esal: 790000, gender: "Female" },
	{ eid: 17, ename: "Yash Malhotra", esal: 910000, gender: "Male" },
	{ eid: 18, ename: "Simran Kaur", esal: 870000, gender: "Female" },
	{ eid: 19, ename: "Neel Bhatia", esal: 800000, gender: "Male" },
	{ eid: 20, ename: "Riya Banerjee", esal: 940000, gender: "Female" }
];

//Write  a javascript display employees data in the form html table
function display_data(){
    let rows=""
    for (const emp of employees) {
            rows=rows+`<tr>
                            <td>${emp.eid}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.esal}</td>
                            <td>${emp.gender}</td>
                       </tr>`
    }
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
   
}