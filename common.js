

const getElementValuetById = (id)=>{
const textField = document.getElementById(id)
const textFieldString = textField.innerText
const  textFieldValue = parseInt(textFieldString)
return textFieldValue;

}

const getElementTextById = (elelment, value)=>{
   const subTotal = document.getElementById(elelment)
   subTotal.innerText = value;

}


const subTotalPrice = () =>{
    const totalPhonePrice = getElementValuetById('phone-total')
    const totalCasePrice = getElementValuetById('case-total')
    const currentTotalPrice = totalPhonePrice + totalCasePrice;
    getElementTextById('sub-total', currentTotalPrice )

    // tax amount 
    const taxAmountString = (currentTotalPrice * 0.005).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    getElementTextById('tax-amount', taxAmount)

    // total price calculator 
    const subTotalPrice = currentTotalPrice + taxAmount ;
    getElementTextById('final-total', subTotalPrice)

}