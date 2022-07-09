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
            for(let i=0; i < playerDeck.numberOfCards; i++){
                hearts()
                diamond()
                club()
                spade()
                function hearts(){
                if(playerDeck.cards[i].value === '2' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                    computerfaceup.src="/Assests/2-Hearts.jpg"
                }
                    if(computerDeck.cards[i].value === '2' && computerDeck.cards[i].suit === 'H'){
                        let computerfaceup = document.querySelector("#computerCard")
                        computerfaceup.src="/Assests/2-Hearts.jpg" 
                                
                }

                if(playerDeck.cards[i].value === '3' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/3-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '3' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/3-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === '4' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/4-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '4' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/4-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === '5' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/5-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '5' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/5-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === '6' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/6-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '6' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/6-Hearts.jpg" 
                }
                
                if(playerDeck.cards[i].value === '7' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/7-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '7' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/7-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === '8' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/8-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '8' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/8-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === '9' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/9-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '9' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/9-Hearts.jpg" 
                }
                
                if(playerDeck.cards[i].value === '10' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/10-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === '10' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/10-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === 'J' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/Jack-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === 'J' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/Jack-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === 'Q' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/Queen-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === 'Q' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/Queen-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === 'K' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/King-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === 'K' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/King-Hearts.jpg" 
                }

                if(playerDeck.cards[i].value === 'A' && playerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/Ace-Hearts.jpg"
                }

                if(computerDeck.cards[i].value === 'A' && computerDeck.cards[i].suit === 'H'){
                    let computerfaceup = document.querySelector("#computerCard")
                    computerfaceup.src="/Assests/Ace-Hearts.jpg" 
                }
            }
            function diamond(){
            if(playerDeck.cards[i].value === '2' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '2' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/2-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === '3' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/3-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '3' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/3-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === '4' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/4-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '4' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/4-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === '5' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/5-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '5' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/5-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === '6' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/6-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '6' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/6-Diamond.jpg"
            }
            
            if(playerDeck.cards[i].value === '7' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/7-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '7' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/7-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === '8' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/8-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '8' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/8-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === '9' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/9-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '9' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/9-Diamond.jpg"
            }
            
            if(playerDeck.cards[i].value === '10' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/10-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === '10' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/10-Diamond.jpg"
            }
            
            if(playerDeck.cards[i].value === 'J' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Jack-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === 'J' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Jack-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === 'Q' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Queen-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === 'Q' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Queen-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === 'K' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/King-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === 'K' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/King-Diamond.jpg"
            }

            if(playerDeck.cards[i].value === 'A' && playerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Ace-Diamond.jpg"
            }

            if(computerDeck.cards[i].value === 'A' && computerDeck.cards[i].suit === 'D'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Ace-Diamond.jpg"
            }

        }
        function club(){
            if(playerDeck.cards[i].value === '2' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Clubs.jpg"
            //computerfaceup.src="/Assests/2-Heart.jpg"
            }

            if(computerDeck.cards[i].value === '2' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/2-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '3' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/3-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === '3' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/2-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '4' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/4-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === '4' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/2-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '5' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/5-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === '5' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/2-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '6' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/6-Clubs.jpg"
            }
            
            if(computerDeck.cards[i].value === '6' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/6-Clubs.jpg"
            }
            
            if(playerDeck.cards[i].value === '7' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/7-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === '7' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/7-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '8' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/8-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === '8' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/8-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '9' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/9-Clubs.jpg"
            }
            
            if(computerDeck.cards[i].value === '9' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/9-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === '10' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/10-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === '10' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/10-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === 'J' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Jack-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === 'J' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Jack-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === 'Q' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Queen-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === 'Q' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Queen-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === 'K' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/King-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === 'K' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/King-Clubs.jpg"
            }

            if(playerDeck.cards[i].value === 'A' && playerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Ace-Clubs.jpg"
            }

            if(computerDeck.cards[i].value === 'A' && computerDeck.cards[i].suit === 'C'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Ace-Clubs.jpg"
            }
        }
        function spade(){
            if(playerDeck.cards[i].value === '2' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
                computerfaceup.src="/Assests/2-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '2' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/2-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '3' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/3-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '3' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/3-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '4' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/4-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '4' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/4-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '5' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/5-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '5' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/5-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '6' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/6-Spades.jpg"
            }
            
            if(computerDeck.cards[i].value === '6' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/6-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '7' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/7-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '7' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/7-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '8' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/8-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '8' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/8-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '9' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/9-Spades.jpg"
            }
            
            if(computerDeck.cards[i].value === '9' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/9-Spades.jpg"
            }

            if(playerDeck.cards[i].value === '10' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/10-Spades.jpg"
            }

            if(computerDeck.cards[i].value === '10' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/10-Spades.jpg"
            }

            if(playerDeck.cards[i].value === 'J' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Jack-Spades.jpg"
            }

            if(computerDeck.cards[i].value === 'J' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Jack-Spades.jpg"
            }

            if(playerDeck.cards[i].value === 'Q' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Queen-Spades.jpg"
            }

            if(computerDeck.cards[i].value === 'Q' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Queen-Spades.jpg"
            }

            if(playerDeck.cards[i].value === 'K' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/King-Spades.jpg"
            }

            if(computerDeck.cards[i].value === 'K' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/King-Spades.jpg"
            }

            if(playerDeck.cards[i].value === 'A' && playerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#playerCard")
            computerfaceup.src="/Assests/Ace-Spades.jpg"
            }

            if(computerDeck.cards[i].value === 'A' && computerDeck.cards[i].suit === 'S'){
                let computerfaceup = document.querySelector("#computerCard")
                computerfaceup.src="/Assests/Ace-Spades.jpg"
            }
        }

        }
        }
