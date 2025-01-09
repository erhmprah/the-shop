const form = document.getElementById("hiddenForm2")
const field = document.getElementById("hiddenInputField2")

function getId(itemId){
    const id = itemId
    field.value = id
    form.submit()
}