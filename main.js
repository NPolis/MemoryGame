document.addEventListener('DOMContentLoaded', function () {
    let card1 = ""
    let card2 = ""
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
    function resetCards() {
        card1 = ""
        card2 = ""
    }
    function matchCheck() {

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
            console.log("you win!")
        }
    }
})





