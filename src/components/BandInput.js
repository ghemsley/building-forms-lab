// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }
  render() {
    return (
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
