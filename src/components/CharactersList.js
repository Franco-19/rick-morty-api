import React, { useState, useEffect } from 'react';

import BadgeElement from './badgeElement/BadgeElement'

import './CharactersList.styles.css'

const CharactersList = () => {

  const [characters, setCharacters] = useState([])

  // let characters = 'anything'

  function getCharacters(){
    fetch('https://rickandmortyapi.com/api/character')
      .then(data => data.json())
      .then(response => {
        setCharacters(response.results)
      })
  }

  useEffect(() => {
    getCharacters()
    // return () => {
    //   cleanup
    // };
  }, [characters]);

  return (
    <div className="characters_container">
      {/* <button onClick={getCharacters}>get data</button> */}
      {characters.map(x => {
          return (
            // <p>{x.name}</p>
            <BadgeElement characterName={x.name} characterImage={x.image} characterStatus={x.status}/>
          )
        }
      )}
    </div>
  )
}

export default CharactersList