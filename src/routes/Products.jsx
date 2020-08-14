import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Popconfirm, Button } from "antd";
import { connect } from "dva";
import { deleteProduct, getProducts } from '../actions';

class Products extends Component {
    columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Actions",
            render: (text, record) => {
                return (
                    <Popconfirm
                        title="Delete?"
                        onConfirm={() => this.handleDelete(record.id)}
                    >
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        },
    ];
    handleDelete = id => {
        this.props.dispatch(deleteProduct(id));
    };
    componentDidMount() {
        this.props.dispatch(getProducts());
    }
    render() {
        return <Table dataSource={this.props.products} columns={this.columns} />;
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
};

export default connect(({ products }) => ({ products }))(Products);