import {NAME, EMAIL} from "./consts.js";

window.onload = (event) => {
    createForm()
    const submit = document.getElementById("submitButton");
    submit.addEventListener('click', createEmployee);

};

function createForm() {
    let form = document.getElementById("form_fields")
    createFormField(form, NAME, "name:", "text")
    createFormField(form, EMAIL, "email:","text")
}

function createFormField(form, field_name, field_label, inputType) {
    form.appendChild(createFormFieldLabel(field_name, field_label))
    form.appendChild(createFormFieldInput(field_name, inputType))
}

function createFormFieldLabel(field_name, field_label) {
    let label = document.createElement("label");
    label.htmlFor = field_name
    label.innerHTML = field_label;
    return label;
}

function createFormFieldInput(field_name, inputType) {
    let input = document.createElement("input");
    input.type = inputType
    input.id = field_name
    input.name = field_name
    return input;
}

function createEmployee() {
    let name = document.getElementById(NAME).value;
    let email = document.getElementById(EMAIL).value;
    createEmployeeCard(name, email)
}

function createEmployeeCard(name, email) {

    let employee_div = document.createElement("employee");
    employee_div.id = 'employeeTagId';
    employee_div.style.width = "100px";
    employee_div.style.height = "100px";
    employee_div.backgroundColor = "red"
    employee_div.style.padding = "50px 10px 20px 30px";
    employee_div.style.paddingTop = "0px";
    employee_div.style.marginTop = "100px";
    employee_div.style.border = "1";

    document.getElementById("allEmployees").appendChild(employee_div);
    createField(employee_div, name)
    createField(employee_div, email)
}

function createField(father_div, field_name) {
    let field = document.createElement(field_name);
    field.innerHTML = field_name;
    document.getElementById(father_div.id).appendChild(field);

}


