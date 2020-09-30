import alertify from "alertifyjs";
import React, { Component } from "react";
import { Form, FormGroup, Input, Label,Button } from "reactstrap";

class Form2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  changeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  submitHandle = (event) => {
    event.preventDefault();
    alertify.success(this.state.email);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandle}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email giriniz..."
              onChange={this.changeHandle}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Sifre</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password giriniz..."
              onChange={this.changeHandle}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Description giriniz..."
              onChange={this.changeHandle}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              placeholder="Sehir giriniz..."
              onChange={this.changeHandle}
            >
              <option>Antalya</option>
              <option>Istanbul</option>
              <option>Izmir</option>
              <option>Ankara</option>
              <option>Mugla</option>
            </Input>
          </FormGroup>
          <Button type="submit">Kaydet</Button>
        </Form>
      </div>
    );
  }
}

export default Form2;
