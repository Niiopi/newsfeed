import React, { Component } from 'react'
import NewsFeed from './components/newsFeed'
import './App.css'


export class App extends Component {
  render() {
    return (
      <div style={container}>
          <NewsFeed />
      </div>
    )
  }
}

const container = {
  margin: 'auto',
  maxWidth: '30%',
  border: '4px solid darkgray',
  borderRadius: '4px'
}

export default App

