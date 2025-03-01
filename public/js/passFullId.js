const userField = document.getElementById("username")
const phoneField = document.getElementById("phone")

const form = document.getElementById("bidForm")
const field = document.getElementById("hidden")
function PassFullId(){
    const name = userField.value
    const phone = phoneField.value
    if(name || phone){
        field.value = localStorage.getItem("itemId")
    console.log(localStorage.getItem("itemId"))
    form.submit()

    }
    
}