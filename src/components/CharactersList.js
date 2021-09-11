import React, {useState} from 'react';

import BadgeElement from './badgeElement/BadgeElement'

const CharactersList = () => {

  const [characters, setCharacters] = useState([])

  // let characters = 'anything'

  function getCharacters(){
    fetch('https://rickandmortyapi.com/api/character')
      .then(data => data.json())
      .then(response => {
        console.log(response.results)
        // response.results

        // personajes = await [response.results]

        setCharacters(response.results)
        // console.log(characters)
      })
  }

  return (
    <div>
      <button onClick={getCharacters}>get data</button>
      {characters.map(x => {
          return (
            // <p>{x.name}</p>
            <BadgeElement characterName={x.name} characterImage={x.image} />
          )
        }
      )}
    </div>
  )
}

export default CharactersList