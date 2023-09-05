
const increasePhoneNumber = (isPhoneNum) =>{
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value
    const phoneNumberValue = parseInt(phoneNumberString);
    console.log(phoneNumberValue)
    let newPhoneNumber;

    if(isPhoneNum){
        newPhoneNumber = phoneNumberValue + 1
    }else{
        newPhoneNumber = phoneNumberValue - 1
    }
   
    phoneNumberField.value = newPhoneNumber
    return newPhoneNumber;

}

const updatedTotalPrice = (newPhoneNumber) =>{
    const newTotalPrice = newPhoneNumber * 1219;
    const totalPriceString = document.getElementById('phone-total');
    const totalNewPrice = parseInt(totalPriceString);
    totalPriceString.innerText = newTotalPrice

   

}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber  = increasePhoneNumber(true)
    updatedTotalPrice(newPhoneNumber)
    subTotalPrice()

})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber =  increasePhoneNumber(false)
    updatedTotalPrice(newPhoneNumber)
    subTotalPrice()
})



