const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", () => {
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/watch?v=${videoId}`;
    })
}

document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

// unfortunately, the video needs permission of the youtube for display, so code works, however the video doesn't show!
