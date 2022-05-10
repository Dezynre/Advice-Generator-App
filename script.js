

let advice_button = document.querySelector("#advice_button")

advice_button.addEventListener("click", (event)=>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => {
        let card = document.querySelector("#card")
        let advice_id = card.firstElementChild
        advice_id.remove()
        let advice = card.firstElementChild
        advice.remove()
        let newAdviceId = document.createElement("h1")
        let newAdvice = document.createElement("p")
        newAdviceId.textContent = `ADVICE #${data.slip.id}`
        newAdvice.textContent = `"${data.slip.advice}"`
        let separator = document.querySelector("#pic")
        card.insertBefore(newAdviceId, separator)
        card.insertBefore(newAdvice, separator)
    });
  })