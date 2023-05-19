import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".feedback-form input");
const textArea = document.querySelector(".feedback-form textarea");

restoreFormData()

form.addEventListener("input", throttle(handlerForm, 500));
form.addEventListener("submit", submitForm)

function handlerForm() {
    const formData = {
        email: input.value.trim(),
        message: textArea.value.trim(),
    }
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    return formData;
}

function restoreFormData() {
    const dataStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
  
    if (dataStorage) {
      input.value = dataStorage.email;
      textArea.value = dataStorage.message;
    }
}

function submitForm(evt) {
    evt.preventDefault();

    if(!validateForm()){
        return
    }
   
    const formData = handlerForm();
    console.log(formData);

    clearFormData();
}

function clearFormData() {
    input.value = "";
    textArea.value = "";
    localStorage.removeItem("feedback-form-state");
}

function validateForm(){
    const areFieldsEmpty = input.value.trim() === "" || textArea.value.trim() === "";

    if(areFieldsEmpty){
        alert("Будь ласка, заповніть всі поля форми")
        return false;
    }
    return true;
}