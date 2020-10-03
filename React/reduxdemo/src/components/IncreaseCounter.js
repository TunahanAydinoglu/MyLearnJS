<<<<<<< Updated upstream
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterActions';


class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <center><button onClick={e=>{this.props.dispatch(increaseCounter())}}>1 Arttir</button></center>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(increaseCounter,dispatch)}
}

=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {increaseCounter} from '../redux/actions/counterActions';


class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <center><button onClick={e=>{this.props.dispatch(increaseCounter())}}>1 Arttir</button></center>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch){
    return{actions:bindActionCreators(increaseCounter,dispatch)}
}

>>>>>>> Stashed changes
export default connect(mapDispatchToProps)(IncreaseCounter);