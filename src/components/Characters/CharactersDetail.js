import React, { Component } from 'react';
import characters from '../../characters';

class CharactersDetail extends Component {

  componentWillMount() {
    const { id } = this.props.match.params;
    this.setState({
      character: characters[id - 1]
    })
  }

  render () {
    const { character } = this.state;
    if (character === undefined) return <div>Loading . . .</div>;
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
      }}>
        <img src={character.image} alt="profile_picture" width='150px'/>
        <span style={{ textAlign: 'left' }}>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        </span>
        <button onClick={() => this.props.history.goBack()}>Go back</button>
      </div>
    )
  }
}

export default CharactersDetail;