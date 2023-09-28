

// ----------------------------------------------------------------------------------------------
// --------------------- REACT HOOKS --------------------------------------------
// ----------------------------------------------------------------------------------------------

// starting from version 16.8
// 1) functional components are simpler unlike the class components
// 2) you don't have to use class or render or constructor
// 3) useState{} hook :
    // - makes me destruct getter and setter
    const [getter, setter] = useState({initalStateValue})
// 4) you can have more than 1 hook useState
// 5) to call one of your object attributes -->
    {getter.attributeName}
    ex : user.name 

import { useState } from 'react';
    
const Functional = () => {

    // getter and setter
        const [user,setUser] = useState({
            name: "Mariam",
            age: 23,
            title : "full stack"
        })



        const [isUserAdmin, setIsUserAdmin] = useState(false);

        const changeName = () => {
            setUser({
              ...user, // spread operator to spread / afred my whole obj " name, age"
                name: "New Name"
            })
            
        }

        return (
            <div>
                <h1>useState Hook from Functional.jsx</h1>
                <h2>Name : {user.name}</h2>
                <h2>Age : {user.age}</h2>
                <h2>title : {user.title}</h2>
    
            </div>
        );
    
    
    
    }
    
    export default Functional;
