var root = document.querySelector(':root')
const changeActive = items => {
    items.forEach(ele => {
        ele.classList.remove('active')
    })
}
const removeSizeSelector = function() {
    fontSizesSpans.forEach(size => {
        size.classList.remove('active')
    })
}

const removeColorSelector = function() {
    colorSpans.forEach(color => {
        color.classList.remove('active')
    })
}
/*
============    LEFT MENU   ============
*/

const menuItems = document.querySelectorAll(".side-bar a")

menuItems.forEach((e) => {
    e.addEventListener("click" , ()=> {
        changeActive(menuItems)
        e.classList.add('active')
        if (e.id != "notifications") {
            document.querySelector('.notification-popup').style.display = 'none'
        } else {
            document.querySelector('.notification-popup').style.display = 'block'
            document.querySelector('.notification-count').style.display = 'none'
        }
    })
}) 


/*
============    MESSAGES MENU   ============
*/

// Variables
const messagesNotifications = document.getElementById('messages-notifications')
const searchMessages =  document.querySelector('#search-messages')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.msg')



const searchMessagesFunc = () => {
    let val = searchMessages.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('.text h4').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex"
        } else {
            chat.style.display = "none"
        }
    })
}

searchMessages.addEventListener("keyup" , searchMessagesFunc)



// Highlight on click
messagesNotifications.addEventListener("click" ,
()=> {
    document.querySelector('#messages-notifications .notification-count').style.display = 'none'
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'

    setTimeout(()=> {
        messages.style.boxShadow = 'none'
    },2000)

})

/*
============    THEME MENU   ============
*/

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');



const openThemeModel = ()=> {
    themeModal.style.display = "grid"
    
}

const closeThemeModel = e => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = "none"
    }
}

themeModal.addEventListener("click" , closeThemeModel)
theme.addEventListener("click", openThemeModel)



// Font Sizes
const fontSizes = document.querySelector('.customize-theme .font-size');
const fontSizesSpans = fontSizes.querySelectorAll('span');

fontSizesSpans.forEach(size => {
    size.addEventListener('click', ()=> {
        changeActive(fontSizesSpans)
        size.classList.add('active')
    })
})


// Colors
const colors = document.querySelector('.customize-theme .color');
const colorSpans = colors.querySelectorAll('span');

colorSpans.forEach(color => {
    color.addEventListener('click', ()=> {
        changeActive(colorSpans)
        color.classList.add('active')
    })
})


// Backgrounds
const background = document.querySelector('.customize-theme .background');
const backgroundDivs = background.querySelectorAll('.bg');

backgroundDivs.forEach(bg => {
    bg.addEventListener('click', ()=> {
        changeActive(backgroundDivs)
        bg.classList.add('active')
    })
})

/*
    ================ Custmize ur theme ================
*/

fontSizesSpans.forEach(size => {
    let fontSize;
    removeSizeSelector()
    size.addEventListener('click' , ()=> {
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left' , '5.4rem')
            root.style.setProperty('--sticky-top-right' , '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left' , '5.4rem')
            root.style.setProperty('--sticky-top-right' , '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left' , '-2rem')
            root.style.setProperty('--sticky-top-right' , '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left' , '-5rem')
            root.style.setProperty('--sticky-top-right' , '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left' , '-12rem')
            root.style.setProperty('--sticky-top-right' , '-35rem')
        }
        // change font size of the root html element 
        document.querySelector('html').style.fontSize = fontSize;
    }) 

})

colorSpans.forEach(color => {
    removeColorSelector()
    let primaryColorHue;
    color.addEventListener('click', ()=> {
        if (color.classList.contains('color-1')) {
            primaryColorHue = '252'
            root.style.setProperty('--color-primary-hue', primaryColorHue);
        } else if (color.classList.contains('color-2')) {
            primaryColorHue = '52'
            root.style.setProperty('--color-primary-hue', primaryColorHue);
        } else if (color.classList.contains('color-3')) {
            primaryColorHue = '0'
            root.style.setProperty('--color-primary-hue', primaryColorHue);
        } else if (color.classList.contains('color-4')) {
            primaryColorHue = '152'
            root.style.setProperty('--color-primary-hue', primaryColorHue);
        } else if (color.classList.contains('color-5')) {
            primaryColorHue = '202'
            root.style.setProperty('--color-primary-hue', primaryColorHue);
        }
    })

})


// Backgrounds 

const Bg1 = document.querySelector('.background .bg-1')
, Bg2 = document.querySelector('.background .bg-2')
, Bg3 = document.querySelector('.background .bg-3')



let lightColorLightness, 
    whiteColorLightness,
    darkColorLightness;

const changeBg = ()=> {
    root.style.setProperty('--light-color-lightness' , lightColorLightness)
    root.style.setProperty('--white-color-lightness' , whiteColorLightness)
    root.style.setProperty('--dark-color-lightness' , darkColorLightness)
}

Bg2.addEventListener("click" , ()=> {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    Bg2.classList.add('active')
    Bg3.classList.remove('active')
    Bg1.classList.remove('active')
    changeBg()
    // window.location.reload()

})

Bg3.addEventListener("click" , ()=> {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    Bg3.classList.add('active')
    Bg2.classList.remove('active')
    Bg1.classList.remove('active')
    changeBg()
})















