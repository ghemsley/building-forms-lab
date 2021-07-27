import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import addBand from '../actions/addBand'
import Band from '../components/Band'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band, i) => (
            <Band band={band} key={i} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands
})

export default connect(mapStateToProps, { addBand })(BandsContainer)
