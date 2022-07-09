//Line 40 of the HTML is how I got this to work- got ** type="module" ** code from techtually.com
import Deck from "./deck.js"

  
let inRound=false
let wait=true
let deck= new Deck()
    deck.shuffleDeck()
    let midpoint =Math.ceil( deck.numberOfCards / 2)
        let playerDeck = new Deck(deck.cards.slice(0,midpoint))
        let computerDeck = new Deck(deck.cards.slice(midpoint, deck.numberOfCards))
    console.log(deck.cards)

    document.addEventListener("click", () => {
        if(wait){
            Rbreak()
            return
        }
        if(inRound){
            startGame()
            return
        }
    })
                //let computerfaceup = document.querySelector("#playerCard")       
                //computerfaceup.src="/Assests/2-Hearts.jpg"
    //startGame()   
    function startGame(){
        
        
        //console.log(playerDeck.cards[0].value)

        function currentCardCount(){
            let checkC = document.querySelector('.computerCount')
            checkC.innerHTML=`${computerDeck.numberOfCards}`
        
            let checkP = document.querySelector('.playerCount')
            checkP.innerHTML=`${playerDeck.numberOfCards}`      
    }
    
    




    function checkResult(){
       let mplayerCard = playerDeck.grabFirst()
       let mcomputerCard = computerDeck.grabFirst()
       console.log(mcomputerCard)
       console.log(mplayerCard)
    for(let i=0;i<1;i++){

    if(mplayerCard.value > mcomputerCard.value){

        playerDeck.push(mplayerCard)
        playerDeck.push(mcomputerCard)

        let check = document.querySelector('.result')
        check.innerHTML='Winner'
    }
    if(mplayerCard.value < mcomputerCard.value){
        computerDeck.push(mplayerCard)
        computerDeck.push(mcomputerCard)
        let check = document.querySelector('.result')
        check.innerHTML='Loser'
    }
    if(mplayerCard.value===mcomputerCard.value){
        playerDeck.push(mplayerCard)
        computerDeck.push(mcomputerCard)
        let check = document.querySelector('.result')
        check.innerHTML='Warr'
    }
  
    }   
    
    wait=true
    inRound=false
    //return playerDeck,computerDeck
    } 
    checkResult()
    currentCardCount()
    //return playerDeck,computerDeck
    //console.log(playerDeck)
    //console.log(computerDeck)
}
function Rbreak(){
            
    if(wait){
        
        let check = document.querySelector('.result')
        check.innerHTML='Click to start round'
    }
    inRound=true
    wait = false
    return
}
    
//https://paste.ofcode.org/3bzrn3EwG5nE42evddCsRvL --check out flip help--


    /*flip()
        console.log(playerDeck.numberOfCards)//output equals value
        
        
        function flip(){
            for(let i=0; i < playerDeck.numberOfCards; i++){
                if(playerDeck.cards[i].value === '2' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                    computerfaceup.src="/Assests/2-Hearts.jpg"
                //computerfaceup.src="/Assests/2-Heart.jpg"
                }
                if(playerDeck.cards[i].value === '3' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === '4' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === '5' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === '6' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }if(playerDeck.cards[i].value === '7' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === '8' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === '9' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }if(playerDeck.cards[i].value === '10' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === 'J' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === 'Q' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === 'K' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                if(playerDeck.cards[i].value === 'A' && playerDeck.cards[i].suite === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Hearts.jpg"
                }
            }
        }*/
