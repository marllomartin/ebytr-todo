import React, { Component } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import List from '../components/List'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <List />
      </div>
    )
  }
}
