import {connect} from 'react-redux';
import React, {Component} from 'react';
import {inc, dec} from './actions/index';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec())
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.props.inc();
  }

  decrement() {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.props.dec();
  }

  render() {
    return (
      <div>
        <h2> Counter </h2>
        <div>
          <button onClick={this.decrement}> - </button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}> + </button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
