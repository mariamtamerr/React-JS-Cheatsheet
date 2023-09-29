// ---------------------------------------------------
// ------------------------- PROPS ------------------------------
// -----------------------------------------------------------

// 1) PROPS --> Sending data between components 
// 2) Props in JS --> arguments , Props in HTML --> attributes
// TO use props into a component , pass the same syntax as HTML attribut :

STRUCTURE : 
In JS  --> function x (props) {
return (
    <>
    <h1>I am {props.lala} </h1>
    </>
)
}

In HTML --> < x  lala = {props} />

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

    EX : In HTML --> <Car brand="Ford" />

         IN JS -->  function Car(props) {
            return (
                <>
                <h2> I am a {props.brand} </h2>
                </>
            )
         }

// TO pass 'STRING' data from one component to another :

function Car(props) {
    return (
        <>
        <h2> I am a {props.brand} </h2>
        </>
    )
}


function Garage(){
    return (
        <>
        <h2> Who lives in my garage ? </h2>
        <Car brand="Ford"/>
        </>
    )
}

// TO pass 'NON-STRING' VARIABLE data from one component to another :
function Car(props) {
    return (
        <>
        <h2> I am a {props.brand} </h2>
        </>
    )
}

function Garage(){
    const carName = "Ford";
    return (
        <>
        <h2> Who lives in my garage? </h2>
        <Car brand={carName}/>
        </>
) }

// OR TO pass an OBJECT into a Component : 

function Garage(){
    const carInfo = {
        name : "Ford",
        model : "Mustang"
    } ; 
    return (
        <>
        <h2> Who lives in my garage? </h2>
        <Car brand={carInfo}/>
        </>
    )
}

    function Car(props) {

        return (
            <>
            <h2> I am a {props.brand.name} </h2>
            </>
        )
}

// props are read only values unlike states which u can change them

// Another EX : 

import GameCard from './GameCard';
import {game} from './gamesData';

const GameList = () => {

return (
    <>
    
    <GameCard gameData={game}/>
    
    
    </>
)


}

export default GameList; 


// ---------------------------------------------------
// and in the above : GameCard component page :

const function GameCard(prop) {

}