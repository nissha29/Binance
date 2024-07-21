let url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'

const body = document.querySelector('body')
const crypto = document.querySelector('.crypto')
const currencies = document.querySelector('.currencies')

async function getCryptoCoinDetails(){
    let response = await fetch(url)
    let data = await response.json()

    let currency = data.usd
    let cnt = 0
    for (const entry in currency) {
        const divi = document.createElement('div')
        divi.classList.add('flex', 'justify-between','text-center')
        currencies.appendChild(divi)
        const name = document.createElement('h2')
        const price = document.createElement('h2')
        name.textContent = `${entry} :`
        price.textContent = `$${currency[entry].toFixed(2)}`
        price.classList.add('text-green-400', 'text-center')
        name.classList.add('hover:text-[#FCD535]')
        divi.appendChild(name)
        divi.appendChild(price)

        if(cnt > 90) break
        cnt++
    }
}

getCryptoCoinDetails()