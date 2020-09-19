import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <Button color="danger">deneme</Button>
            </div>
        );
    }
}

export default ProductList;