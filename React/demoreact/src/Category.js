import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


class Category extends Component {
  state = {
      categories: [],
    };

    componentDidMount(){
      this.getCategories();
    }

    getCategories = ()=>{
      fetch("http://localhost:3000/categories")
      .then(response => response.json()).then(data=>this.setState({categories:data}));
    }
  
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              color="danger"
              onClick={() => {this.props.changeCategory(category)} }
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
          {this.props.currentCategory}
        </ListGroup>
      </div>
    );
  }
}

export default Category;
