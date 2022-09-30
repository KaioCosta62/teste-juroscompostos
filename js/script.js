function yearsInvestiments(){
  let htmlYearsInvestiments
  const selectYears = document.querySelector('.timeYears')

  for(let i = 1; i <= 50; i++){ 
    if(i >= 10){
      htmlYearsInvestiments = `
      <option value="${i}">${i} anos</option>
    `
    }else{
      htmlYearsInvestiments = `
      <option value="${i}">${i} ano</option>
    `
    }

    selectYears.innerHTML += htmlYearsInvestiments
    
  
  }

}

function simulatorInvesitments(){
  const form = document.querySelector('#simulator')
  
  form.addEventListener('submit', function(e){
    e.preventDefault()

    const name = document.forms['simulator']['name'].value
    const mensality = document.forms['simulator']['mensality'].value
    const timeInvestiment = document.forms['simulator']['timeYears'].value


  })
}

yearsInvestiments()
simulatorInvesitments()
