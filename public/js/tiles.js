



const hiddenForm = document.getElementById("hiddenForm")
const inputField = document.getElementById("hiddenInputField")

function getFullItemId(itemId){
    const id = itemId
    inputField.value = id
    localStorage.setItem("itemId",id)
    hiddenForm.submit()
}




