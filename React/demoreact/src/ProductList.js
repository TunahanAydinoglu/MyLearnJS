import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
            </div>
        );
    }
}

export default ProductList;