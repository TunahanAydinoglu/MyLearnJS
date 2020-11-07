import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>{this.props.counter}</h1>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
import React, { Component } from "react";
import { connect } from "react-redux";


class Counter extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>{this.props.counter}</h1>
        </center>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);