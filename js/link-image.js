Array.from(document.getElementsByClassName('epochtime')).forEach(child => {
    child.addEventListener('click', () => {
        clickSound.play()
        window.open("https://www.theepochtimes.com/")
    })
});

[...document.getElementsByClassName('ntd')].forEach(function(child) {
    child.addEventListener('click', () => {
        clickSound.play()
        window.open("https://www.ntd.com/")
    })
});
[...document.getElementsByClassName('john-hobkins')].forEach(function(child) {
    child.addEventListener('click', () => {
        clickSound.play()
        window.open("https://coronavirus.jhu.edu/map.html")
    })
});

// NOTE YOUTUBE
Array.from(document.getElementsByClassName('china-uncensored-youtube')).forEach(child => {
    child.addEventListener('click', () => {
        clickSound.play()
        window.open("https://www.youtube.com/channel/UCgFP46yVT-GG4o1TgXn-04Q")
    })
});
Array.from(document.getElementsByClassName('america-uncovered-youtube')).forEach(child => {
    child.addEventListener('click', () => {
        clickSound.play()
        window.open("https://www.youtube.com/channel/UC_7vFlErTHxVD-IFNB-BFCg")
    })
});
Array.from(document.getElementsByClassName('ntdtv-youtube')).forEach(child => {
    child.addEventListener('click', () => {
        clickSound.play()
        window.open("https://www.youtube.com/user/NTDTV/featured")
    })
});
Array.from(document.getElementsByTagName('a')).forEach(child => {
    child.addEventListener('click', () => {
        clickSound.play()
    })
});