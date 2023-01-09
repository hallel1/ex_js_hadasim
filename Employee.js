// import {NAME, EMAIL} from "./consts";

window.onload = (event) => {
    const submit = document.getElementById("submitButton");
    submit.addEventListener('click', createEmployee);

};

function createEmployee() {
    let name = document.getElementById("a_name").value;
    let email = document.getElementById("a_email").value;
    createEmployeeCard(name, email)
}
function createEmployeeCard(name, email){
    
    let employee_div = document.createElement("employee");
    employee_div.id = 'employeeTagId';
    employee_div.style.width = "100px";
    employee_div.style.height = "100px";
    employee_div.backgroundColor = "red"
    employee_div.style.padding = "50px 10px 20px 30px";
    employee_div.style.paddingTop = "0px";
    employee_div.style.marginTop = "100px";
    employee_div.style.border= "1";

    document.getElementById("allEmployees").appendChild(employee_div);
    createField(employee_div,name)
    createField(employee_div,email)
}
function createField(father_div,field_name,){
    let field = document.createElement(field_name);
    field.innerHTML = field_name;
    document.getElementById(father_div.id).appendChild(field);

}


