import React, { Component } from 'react'
import { connect } from 'react-redux'
import Btn from './Btn'
import Num from './Num'

class Counter extends Component {

  render() {
    return (
        <>
            {/* <div>
                <Num num={this.props.ctr} />
                <Btn label="Inc" clicked={this.props.onInc} />
                <Btn label="Dec" clicked={this.props.onDec} />
            </div> */}
            <div>
                <p>Counter: {this.props.ctr}</p>
                <button onClick={this.props.onInc}>Inc</button>
                <button onClick={this.props.onDec}>Dec</button> 
            </div>
        </>
    )
  }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInc: () => dispatch({type: 'INC', value: 1}),
        onDec: () => dispatch({type: 'DEC', value: 1}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)