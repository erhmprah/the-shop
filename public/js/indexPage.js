const hiddenForm = document.getElementById("hiddenForm")
const inputField = document.getElementById("hiddenInputField")

function getBrand(brandKeyword){
    const brandSearchKeyword = brandKeyword
    inputField.value = brandSearchKeyword
    hiddenForm.submit()
    
}



function getCategory(categoryKeyword){
    const categorySearchKeyword = categoryKeyword
    inputField.value = categorySearchKeyword
    hiddenForm.submit()
}

function getTrending(trendingKeyword){
    const trendingSearchKeyword = trendingKeyword
    inputField.value = trendingSearchKeyword
    hiddenForm.submit()
}


