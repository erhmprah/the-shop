const hiddenForm = document.getElementById("hiddenForm")
const inputField = document.getElementById("hiddenInputField")

function getDeleteID(itemId){
    const id = itemId
    inputField.value = id
    hiddenForm.submit()
}

