// number changing
const number = document.querySelector('.number')
let currNum = 210448188

const interval = setInterval( () =>{
    currNum++
    number.textContent = currNum.toLocaleString()
    if(currNum > 210448200){
        currNum = 210448188
    }
},1000/5)


// coins text content change
const coins = document.querySelector('.coins')
const popular = document.querySelector('.popular')
const newListing = document.querySelector('.new-listing')
const newListingText = document.querySelector('.new-listing-text')
const popularText = document.querySelector('.popular-text')

popularText.addEventListener('click', (e) =>{
    coins.appendChild(popular)
    coins.removeChild(newListing)

    popularText.style.color = '#FCD535'
    newListingText.style.color = '#878f99'
})

newListingText.addEventListener('click', (e) =>{
    newListing.classList.remove('hidden')
    coins.appendChild(newListing)
    coins.removeChild(popular)

    newListingText.style.color = '#FCD535'
    popularText.style.color = '#878f99'
})


//toggle to dark and light mode
const body = document.querySelector('body')
const mode = document.querySelector('.mode')
const nav = document.querySelector('.nav-bar')
const login = document.querySelector('.login')
const news = document.querySelector('.news-section')
const emailPhn = document.querySelector('#email-phone')
const earning = document.querySelector('.earning')

function addLightMode(){
    if(body.classList.contains('dark-mode')) body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    body.style.backgroundColor = 'white'
    body.style.color = '#181A20'
    nav.style.backgroundColor = '#fff'
    login.style.backgroundColor = '#c2c1c1'
    coins.style.backgroundColor = '#EAECEF'
    coins.style.color = '#181A20'
    news.style.backgroundColor = '#EAECEF'
    news.style.color = '#181A20' 
    emailPhn.style.backgroundColor = '#fff'
    earning.style.backgroundColor = '#EAECEF'
}

function addDarkMode(){
    if(body.classList.contains('light-mode')) body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    body.style.backgroundColor = '#181A20'
    body.style.color = '#c2c1c1'
    nav.style.backgroundColor = '#181A20'
    login.style.backgroundColor = '#2B3139'
    coins.style.backgroundColor = '#202630'
    coins.style.color = '#878f99'
    news.style.backgroundColor = '#202630'
    news.style.color = '#878f99'
    emailPhn.style.backgroundColor = '#181A20'
    earning.style.backgroundColor = '#202630'
}

mode.addEventListener('click', (e) => {
    if(body.classList.contains('dark-mode')){
        addLightMode()
    }
    else{
        addDarkMode()
    }
})


// trade on the go anywhere
const desktop = document.querySelector('.desktop')
const lite = document.querySelector('.lite')
const pro = document.querySelector('.pro')

const desktopText = document.querySelector('.desktop-text')
const liteText = document.querySelector('.lite-text')
const proText = document.querySelector('.pro-text')
const tradeImages = document.querySelector('.trade-images')
const trade = document.querySelector('.trade')

desktopText.addEventListener('click', (e) =>{
    desktopText.style.color = '#FCD535'
    liteText.style.color = '#c2c1c1'
    proText.style.color = '#c2c1c1'

    desktop.classList.remove('hidden')
    lite.classList.add('hidden')
    pro.classList.add('hidden')

    tradeImages.appendChild(desktop)

    trade.classList.remove('gap-52')
    trade.classList.add('gap-20')
    desktop.style.marginTop = '40px'
})

liteText.addEventListener('click', (e) =>{
    liteText.style.color = '#FCD535'
    desktopText.style.color = '#c2c1c1'
    proText.style.color = '#c2c1c1'

    lite.classList.remove('hidden')
    desktop.classList.add('hidden')
    pro.classList.add('hidden')

    tradeImages.appendChild(lite)

    trade.classList.remove('gap-20')
    trade.classList.add('gap-52')  
})

proText.addEventListener('click', (e) =>{
    proText.style.color = '#FCD535'
    liteText.style.color = '#c2c1c1'
    desktopText.style.color = '#c2c1c1'

    pro.classList.remove('hidden')
    lite.classList.add('hidden')
    desktop.classList.add('hidden')

    tradeImages.appendChild(pro)

    trade.classList.remove('gap-20')  
    trade.classList.add('gap-52')  
})


// FAQ's section
const faqs = document.querySelectorAll('.faq-section')

faqs.forEach( (faq)=>{
    const ques = faq.querySelector('.question')
    const plus = faq.querySelector('.plus')
    const minus = faq.querySelector('.minus')
    const ans = faq.querySelector('.ans')

    ques.addEventListener('click', (e) => {
        
        faq.classList.add('rounded-xl')

        if(ans.classList.contains('hidden')){
            ans.classList.remove('hidden')
            if(body.classList.contains('light-mode')){
                faq.classList.add('bg-[#EAECEF]')
            }
            if(body.classList.contains('dark-mode')){
                faq.classList.add('bg-[#202630]')
            }
            
        }
        else{   
            ans.classList.add('hidden')
            if(body.classList.contains('light-mode')){
                faq.classList.remove('bg-[#EAECEF]')
            }
            if(body.classList.contains('dark-mode')){
                faq.classList.remove('bg-[#202630]')
            }
        }
        
        if(minus.classList.contains('hidden')){
            minus.classList.remove('hidden')
            minus.classList.add('w-8', 'h-8', 'text-[20px]', 'rounded-full', 'bg-[#FCD535]', 'text-[#181A20]', 'text-center')
            plus.classList.add('hidden')
        }
        else{
            minus.classList.add('hidden')
            minus.classList.remove('w-8', 'h-8', 'text-[20px]', 'rounded-full', 'bg-[#FCD535]', 'text-[#181A20]', 'text-center')
            plus.classList.remove('hidden')
        }
        
    })

    ques.addEventListener('mouseover', (e) => {
        if(body.classList.contains('dark-mode')){
            ques.classList.add('bg-[#202630]')
        }
        if(body.classList.contains('light-mode')){
            ques.classList.add('bg-[#EAECEF]')
        }
        
        plus.classList.add('w-8', 'h-8', 'text-[20px]', 'rounded-full', 'bg-[#FCD535]', 'text-[#181A20]', 'text-center');
    })

    ques.addEventListener('mouseout', (e) => {
        if(body.classList.contains('dark-mode')){
            ques.classList.remove('bg-[#202630]')
        }
        if(body.classList.contains('light-mode')){
            ques.classList.remove('bg-[#EAECEF]')
        }
        plus.classList.remove('w-8', 'h-8', 'text-[20px]', 'rounded-full', 'bg-[#FCD535]', 'text-[#181A20]', 'text-center');
    })
})

