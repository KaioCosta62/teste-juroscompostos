function yearsInvestiments(){
  let htmlYearsInvestiments
  const selectYears = document.querySelector('.timeYears')

  for(let i = 1; i <= 50; i++){ 
    if(i > 1){
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
  const firstPage = document.querySelector('.first-page')
  const secondPage = document.querySelector('.second-page')

  form.addEventListener('submit', function(e){
    e.preventDefault()

    const name = document.forms['simulator']['name'].value

    const mensality = document.forms['simulator']['mensality'].value
    const mensalityNumber = Number(mensality.replace(',','.').replace('R$','').replace(' ', ''))

    const interestRate = document.forms['simulator']['rate'].value
    const interestRateNumber = Number(interestRate.replace('%', '').replace(',','.'))

    const timeInvestiment = document.forms['simulator']['timeYears'].value
    const timeInvestimentNumber = Number(timeInvestiment)

    const configApi = {
      header: {
        "content-type": "application/json"
      },
      method: "POST",
      body: `{ "expr": "${mensalityNumber} * (((1 + ${interestRateNumber / 100}) ^ ${timeInvestimentNumber * 12} - 1) / ${interestRateNumber / 100})" }`
    }

    function transformedJson(response){
      return response.json()
    }

    function apiData(dados){
      let returnInvestiment = dados.result
      console.log(returnInvestiment)
    }

    fetch('http://api.mathjs.org/v4/', configApi).then(transformedJson).then(apiData)
  })

}

yearsInvestiments()
simulatorInvesitments()
