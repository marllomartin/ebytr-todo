import React, { Component } from 'react'
import Header from '../components/Header'
import Tasks from '../components/Tasks'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tasks />
      </div>
    )
  }
}
