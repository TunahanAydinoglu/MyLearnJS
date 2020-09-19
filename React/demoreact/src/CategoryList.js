import React, { Component } from 'react'
import { Alert, ListGroup, ListGroupItem } from 'reactstrap'

export default class CategoryList extends Component {
    
       state = {
            categories:[
                {categoryId:1,categoryName:"Beverages"},
                {categoryId:2,categoryName:"Condiments"},
            ],
        };

        
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        
                        this.state.categories.map(category =>(
                        <ListGroupItem key={category.categoryId} onClick={()=>this.props.changeCategory(category)}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h2>{this.props.currentCategory}</h2>
            </div>
        )
    };
    
}