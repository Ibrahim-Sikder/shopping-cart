
const updatedCaseNumber = (isCaseNumber)=>{
    const caseField = document.getElementById('case-number-field');
    const caseFieldString = caseField.value
    const caseNumber = parseInt(caseFieldString);
   let newCaseNuber ;
   if(isCaseNumber){
    newCaseNuber = caseNumber + 1
   }else{
    newCaseNuber = caseNumber - 1
   }
   caseField.value = newCaseNuber
   return newCaseNuber;

}

const updatedCaseTotalPrice = (newCaseNumber) =>{
    const newCasePrice = newCaseNumber * 59 ;
    const previousCasePrice = document.getElementById('case-total');
    previousCasePrice.innerText = newCasePrice

}







document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updatedCaseNumber(true)
    updatedCaseTotalPrice(newCaseNumber)
    subTotalPrice()

})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updatedCaseNumber(false)
    updatedCaseTotalPrice(newCaseNumber)
    subTotalPrice()

   

    
})

