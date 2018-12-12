import React from 'react';
import characters from '../../characters';
import { Link } from 'react-router-dom';

const CharactersList = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '90vh',
      flexWrap: 'wrap'
    }}>

      {characters.map(character => {
        return (
          <section key={character.id} style={{
            height: '150px',
            width: '25%',
            marginRight: '2%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <Link to={`/characters/${character.id}`}>
              <img src={character.image} alt="profile_picture" width='150px'/>
            </Link>
            <span style={{ marginLeft: '20px', textAlign: 'left' }}>
              <Link to={`/characters/${character.id}`}>
                <h2>{character.name}</h2>
              </Link>
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
            </span>
          </section>
        )
      })}

    </div>
  )
};

export default CharactersList;