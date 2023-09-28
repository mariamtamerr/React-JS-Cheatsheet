// ----------------------------------------------------------------
// -------------- USE EFFECT HOOK --------------------------------
// ----------------------------------------------------------------

// 1) called Side Effects
// 2) import it from react
// 3) takes callback funciton & array of dependencies
    useEffect ( ()=>{} , [] ); 
// 4) types of effects : 
        // 1) fires only once : when array is empty
        // 2) fires every time a change happens : when getter passed to array (array not empty)
        // 3) destroyes : when a return statment is passed

    
import { useState,useEffect } from 'react';
    
const Functional = () => {

    // getter and setter
        const [user,setUser] = useState({
            name: "Mariam",
            age: 23,
            title : "full stack"
        })



// empty array , fires only once
useEffect(()=>{

    console.log("use effect did mount");
    
    
    }, [] );
            
    // getter here (array not empty) , fires everytime a change happens
    useEffect(()=>{
    
        console.log("use effect did update");
        
        
        }, [user] );
    

        // return statement --> destroys 
        useEffect(()=>{
    
            return()=> {} 

            }); 

                
    


        // const [isUserAdmin, setIsUserAdmin] = useState(false);

        const changeName = () => {
            setUser({
              ...user, // spread operator to spread / afred my whole obj " name, age"
                name: "New Name"
            })
            
        }

        return (
          <>
                <h1>useState Hook from Functional.jsx</h1>
                <h2>Name : {user.name}</h2>
                <h2>Age : {user.age}</h2>
                <h2>title : {user.title}</h2>
    
            </>
        );
    
    
    
    }
    
    export default Functional; 