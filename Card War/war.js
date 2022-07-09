//Line 40 of the HTML is how I got this to work- got ** type="module" ** code from techtually.com
import Deck from "./deck.js"

  
let inRound=false
let wait=true
let deck= new Deck()
    deck.shuffleDeck()
    let midpoint =Math.ceil( deck.numberOfCards / 2)
        let playerDeck = new Deck(deck.cards.slice(0,midpoint))
        let computerDeck = new Deck(deck.cards.slice(midpoint, deck.numberOfCards))
        let mplayerCard 
        let mcomputerCard
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
       mplayerCard = playerDeck.grabFirst()
       mcomputerCard = computerDeck.grabFirst()
       console.log(mcomputerCard)
       console.log(mplayerCard)
    for(let i=0;i<1;i++){

    if(mplayerCard.value > mcomputerCard.value){

        playerDeck.push(mplayerCard)
        playerDeck.push(mcomputerCard)
        flip()
        let check = document.querySelector('.result')
        check.innerHTML='Winner'
    }
    if(mplayerCard.value < mcomputerCard.value){
        computerDeck.push(mplayerCard)
        computerDeck.push(mcomputerCard)
        flip()
        let check = document.querySelector('.result')
        check.innerHTML='Loser'
    }
    if(mplayerCard.value===mcomputerCard.value){
        playerDeck.push(mplayerCard)
        computerDeck.push(mcomputerCard)
        flip()
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
    checkWinner()
    checkLosser()
    //return playerDeck,computerDeck
    //console.log(playerDeck)
    //console.log(computerDeck)
}

function checkWinner(){
if(playerDeck.numberOfCards===0){
    let check = document.querySelector('.result')
    check.innerHTML='You Won'
}
}

function checkLosser(){
    if(computerDeck.numberOfCards===0){
        let check = document.querySelector('.result')
        check.innerHTML='You Lossed'
    }

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

function flip(){
    
const playerDeckValue=mplayerCard.value;
const playerDeckSuit=mplayerCard.suit;

let playerfaceup = document.querySelector("#playerCard")
playerfaceup.src= cards[`${playerDeckValue}${playerDeckSuit}`]

const computerDeckValue=mcomputerCard.value
const computerDeckSuit=mcomputerCard.suit

let computerfaceup = document.querySelector("#computerCard")
computerfaceup.src= cards[`${computerDeckValue}${computerDeckSuit}`]

}

        
