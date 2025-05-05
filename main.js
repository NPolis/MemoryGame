document.addEventListener('DOMContentLoaded', function () {
    shaffle()
    let card1 = ""
    let card2 = ""
    let counter = 0
    addEvents2cards()
    let playAgainBtn = document.getElementById("btn")
    playAgainBtn.addEventListener("click", function (event) {
        resetGame()
    })

    function resetCards() {
        card1 = ""
        card2 = ""
    }
    function matchCheck() {
        counter++
        document.getElementById('count').innerText = counter

        if (card1.children[0].children[1].children[0].classList.value === card2.children[0].children[1].children[0].classList.value) {
            card1.classList.add("shake-match")
            card2.classList.add("shake-match")
            card1.children[0].children[1].classList.add("match")
            card2.children[0].children[1].classList.add("match")
        } else {
            card1.classList.remove("select")
            card2.classList.remove("select")

        }
        resetCards()
        winCheck()
    }
    function winCheck() {
        let matchedCards = document.getElementsByClassName("match")
        if (matchedCards.length === 16) {
            document.getElementById('win-card').classList.add("win-class")

        }
    }
    function addEvents2cards() {
        let cards = document.getElementsByClassName("flip-card")
        for (let card of cards) {
            card.addEventListener("click", function (event) {
                //event.stopPropagation()
                let target = event.target.parentElement.parentElement


                if (target.tagName === "LI") {

                    console.log(card1)
                    console.log(card2)
                    target.classList.add("select")
                    if (card1 === "") {
                        card1 = target

                    } else {
                        card2 = target
                        setTimeout(matchCheck, 800)


                    }

                }


            }, true)
        }
    }
    function resetGame() {
        card1 = ""
        card2 = ""
        counter = 0
        document.getElementById('win-card').classList.remove("win-class")
        let desk = document.getElementById("desk")
        desk.innerHTML = ""
        shaffle()
        addEvents2cards()
    }
})

function shaffle() {
    let classes = ["fa-cloud", "fa-cloud", "fa-carrot",
        "fa-carrot", "fa-rainbow", "fa-rainbow", "fa-car", "fa-car",
        "fa-star", "fa-star", "fa-heart", "fa-heart",
        "fa-moon", "fa-moon",
        "fa-dove", "fa-dove"]
    let shaffleRandArray = shuffleArray(classes)
    console.log(shaffleRandArray)

    let counter = 0
    let ul = document.createElement("ul")
    let desk = document.getElementById("desk")

    for (let i = 0; i < shaffleRandArray.length; i++) {
        let li = document.createElement("li")
        li.classList.add("flip-card")
        li.innerHTML = ` <div class="flip-card-inner">
                    <div class="flip-card-front">

                    </div>
                    <div class="flip-card-back">
                        <i class="fa-solid ${shaffleRandArray[i]}"></i>
                    </div>
                </div>`
        if (counter < 4) {

            ul.appendChild(li)
            counter++

        } else {
            desk.appendChild(ul)
            ul = document.createElement("ul")
            ul.appendChild(li)
            counter = 1
        }

        if (i === 15) {
            desk.appendChild(ul)
        }

    }



}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];  // swap elements
    }
    return array;
}

