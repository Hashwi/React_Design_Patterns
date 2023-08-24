import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
    const[nameInputError, setNameInputError] = useState('')
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [haircolor, setHaircolor] = useState("");

  useEffect(()=>{
    if (name.length<=2){
        setNameInputError('Name should be more than two charactors')
       
    } else {
        setNameInputError('')
    }
   
  },[name])

  return (
    <>
      <form>
        {nameInputError && <p>{nameInputError}</p>}
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          name="hairColor"
          type="text"
          placeholder="Hair Color"
          value={haircolor}
          onChange={(e) => setHaircolor(e.target.value)}
        />
        <button>
          Submit
        </button>
      </form>
    </>
  );
};
