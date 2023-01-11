import {NAME, EMAIL} from "./consts.js";

export function createForm() {
    let form = document.getElementById("form_fields")
    createFormField(form, NAME, "name: ", "text")
    createFormField(form, EMAIL, "email: ","text")
}

function createFormField(form, field_name, field_label, inputType) {
    form.appendChild(createFormFieldLabel(field_name, field_label))
    form.appendChild(createFormFieldInput(field_name, inputType))
    form.appendChild(document.createElement("br"))
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




