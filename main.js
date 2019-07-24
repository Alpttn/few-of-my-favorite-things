
// reference to dom element
// event listener
// get data
// html representation
// render to dom

// here is where i render to DOM

const inputContainer = document.querySelector("#inputList")

// make a function to pass the values of the input boxes to make htmlRep
const htmlRep = (favItemValue, placeToPurchaseValue) => {
    return `
    I can purchase ${favItemValue} at ${placeToPurchaseValue}
    `
}


document.querySelector("#saveEntry").addEventListener("click", () => {
    // get the data
    const favItemValue = document.querySelector("#favItem")
    const placeToPurchaseValue = document.querySelector("#placeToPurchase")
    // we need to call it in our function for the event listener
    const ItemPlaceList = htmlRep(favItemValue.value, placeToPurchaseValue.value)
    console.log(ItemPlaceList)
    
    // add the htmlrep to the dom
    inputContainer.innerHTML += ItemPlaceList
    favItemValue.value="";
    placeToPurchaseValue.value="";
})

// function myFunction() {
//     favItemValue = "";
// }

