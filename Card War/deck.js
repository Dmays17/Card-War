    let Suite=['H','D','C','S']
    let SuiteNumber=['2','3','4','5','6','7','8','9','10','J','Q','K','A']
// I used saw a video that helped me design the card game on youtube ** web Dev Simplified **
// That video inspered the export and class methods seen.
//Originally I pushed the suite and suitenumber together but that made checking for a greater 
//value harder 

export default class Deck {
        constructor(cards=newDeck()){
            this.cards=cards
        }

//get-It identifies an object property that's returned when the property is read.-Stack Overflow.
        get numberOfCards(){
            return this.cards.length
        }
// learned that shift removes the first element from the and returns that element **thispointer.com**
        grabFirst() {
            return this.cards.shift()
          }
        
          push(card) {
            this.cards.push(card)
          }
        //this is the Fisher-Yates shuffle algorithm code from ** Masteringjs.io **
         shuffleDeck() {
            for(let i = this.numberOfCards - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i+1))
                let temp = this.cards[j]
                this.cards[j]=this.cards[i]
                this.cards[i]=temp       
            }   
            
        }
        

    }
    
    class Card{
        constructor(suit,value) {
            this.suit = suit
            this.value = value
          }
    }

    function newDeck(){
        return Suite.flatMap(suite=>{
            return SuiteNumber.map(value=>{
                 return new Card(suite,value)
            })
        })
    }

    

    
    
  