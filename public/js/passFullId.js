
const form = document.getElementById("bidForm")
const field = document.getElementById("hidden")
function PassFullId(){
    field.value = localStorage.getItem("itemId")
    console.log(localStorage.getItem("itemId"))
    form.submit()
}