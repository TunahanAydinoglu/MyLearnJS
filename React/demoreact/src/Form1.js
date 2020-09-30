import React, { Component } from "react";

class Form1 extends Component {
  state = {
    userName: "",
    city: "",
  };
  onChangeHandler = (event) => {
    // this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]:value});
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input onChange={this.onChangeHandler} type="text" name="userName"></input>
          <label> User Name : {this.state.userName}</label>
          <h3>City</h3>
          <input onChange={this.onChangeHandler} type="text" name="city"></input>
          <label> City : {this.state.city}</label>
        <br></br>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}

export default Form1;
