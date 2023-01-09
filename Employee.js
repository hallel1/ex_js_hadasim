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
    let employee_div = document.createElement("employee");

    employee_div.id = 'employeeTagId';
    employee_div.style.width = "100px";
    employee_div.style.height = "100px";
    employee_div.backgroundColor = "red"
    employee_div.style.padding = "50px 10px 20px 30px";
    employee_div.style.paddingTop = "0px";
    employee_div.style.marginTop = "100px";
    employee_div.style.border = "1";

    all_employees.appendChild(employee_div)
    createField(employee_div, name)
    employee_div.appendChild(document.createElement("br"))
    createField(employee_div, email)
}

function createField(employee_div, field_name) {
    let field = document.createElement(field_name);
    field.innerHTML = field_name;
    document.getElementById(employee_div.id).appendChild(field);

}


