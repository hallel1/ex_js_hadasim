import {NAME, EMAIL, DELETE_BUTTON_ID,CLASS_EMPLOYEE_CARD} from "./consts.js";
import {createForm} from "./CreateForm.js";

window.onload = (event) => {
    createForm()
    const submit = document.getElementById("submitButton");
    submit.addEventListener('click', createEmployee);
};

function createEmployee() {
    let name = document.getElementById(NAME).value;
    let email = document.getElementById(EMAIL).value;
    createEmployeeCard(name, email);
    document.getElementById(NAME).value = "";
    document.getElementById(EMAIL).value = "";
}

function getRandomId() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);


}

function createEmployeeCard(name, email) {
    let all_employees = document.getElementById("allEmployees");
    let employee_div = document.createElement("div");
    let id = getRandomId()
    console.log("create "+ id)
    employee_div.id = 'employeeTagId_' + id;
    employee_div.className = CLASS_EMPLOYEE_CARD;
    employee_div.style.width = "20%";
    employee_div.style.padding = "0px 10px 20px 30px";
    employee_div.style.border = "2px solid black";
    employee_div.style.float = "left";

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

document.getElementById("allEmployees")
    .addEventListener("mouseover", changeCard);
document.getElementById("allEmployees")
    .addEventListener("mouseout", resetCard);



function changeCard(event) {
    let card = document.getElementById(event.target.id)
    console.log("hii "+event.target.id)
    if(card.className !== CLASS_EMPLOYEE_CARD){
        return;
    }
    card.style.backgroundColor = "pink"
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "delete"
    deleteButton.id = DELETE_BUTTON_ID
    card.appendChild(deleteButton)

    deleteButton.addEventListener("click",deleteCard)
}

function resetCard(event) {
    let card = document.getElementById(event.target.id)
    console.log("bye "+event.target.id)
    card.style.backgroundColor = "white"
    document.getElementById(DELETE_BUTTON_ID).remove()
}

function deleteCard() {
    document.getElementById(DELETE_BUTTON_ID).parentElement.remove()

}

