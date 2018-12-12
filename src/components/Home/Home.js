import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            flexDirection: 'column'
      }}>
        <h1>Welcome to my wonderful page</h1>
        <Link to='/characters'>
          <button>Show me more</button>
        </Link>
      </div>
    )
  }
}

export default Home;
