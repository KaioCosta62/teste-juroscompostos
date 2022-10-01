function yearsInvestiments(){
  let htmlYearsInvestiments
  const selectYears = document.querySelector('.timeYears')

  for(let i = 1; i <= 10; i++){ 

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


function simulateInvesitments(){
  const form = document.querySelector('#simulator')
  const firstPage = document.querySelector('.first-page')
  const secondPage = document.querySelector('.second-page')
  const btnSimulateAgain = document.querySelector('.second-page button')

  form.addEventListener('submit', function(e){
    e.preventDefault()

    const name = document.forms['simulator']['name'].value

    const mensality = document.forms['simulator']['mensality'].value
    const mensalityNumber = Number(mensality.replace(',','.').replace('R$',''))

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

    function apiData(data){
      let returnInvestiment = data.result
      console.log(returnInvestiment)
    }

    fetch('http://api.mathjs.org/v4/', configApi).then(transformedJson).then(apiData)
    firstPage.style.display = 'none'
    secondPage.style.display = 'flex'
  })

 
 
}

function simulateAgain(){
  const firstPage = document.querySelector('.first-page')
  const secondPage = document.querySelector('.second-page')
  const btnSimulateAgain = document.querySelector('.second-page button')

  btnSimulateAgain.addEventListener('click', function(){
    firstPage.style.display = 'flex'
    secondPage.style.display = 'none'
  })
}
yearsInvestiments()
simulateInvesitments()
simulateAgain()
