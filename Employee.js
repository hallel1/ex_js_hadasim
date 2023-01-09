import {NAME, EMAIL} from "./consts.js";
import {createForm} from "./CreateForm.js";

window.onload = (event) => {
    createForm()
    const submit = document.getElementById("submitButton");
    submit.addEventListener('click', createEmployee);
};

function createEmployee() {
    let name = document.getElementById(NAME).value;
    let email = document.getElementById(EMAIL).value;
    createEmployeeCard(name, email)
}

function createEmployeeCard(name, email) {
    let all_employees = document.getElementById("allEmployees");
    let employee_div = document.createElement("div");

    employee_div.id = 'employeeTagId';
    employee_div.style.width = "100px";
    employee_div.style.padding = "0px 10px 20px 30px";
    employee_div.style.border = "2px solid black";

    all_employees.appendChild(employee_div)
    createField(employee_div, name, "name")
    employee_div.appendChild(document.createElement("br"))
    createField(employee_div, email, "email")
}

function createField(employee_div, employee_detail, field_name) {
    let field = document.createElement("div");
    field.innerHTML = field_name + " : " + employee_detail;
    document.getElementById(employee_div.id).appendChild(field);

}


