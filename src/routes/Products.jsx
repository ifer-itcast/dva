import React from "react";
import PropTypes from "prop-types";
import { Table, Popconfirm, Button } from "antd";
import { connect } from "dva";
import { Link, routerRedux } from "dva/router";

const Products = ({ history, dispatch, products }) => {
    const columns = [
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
                        onConfirm={() =>
                            dispatch({
                                type: "products/delete",
                                payload: record.id,
                            })}
                    >
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        },
    ];
    function getProducts() {
        // api.getProduct().then(console.log);
        // api.getUser().then(console.log);
        dispatch({ type: 'products/addProductAsync' });
    }
    return (
        <div>
            <Table dataSource={products} columns={columns} />
            <Link to="/">Home</Link>
            <Button type="primary" onClick={() => history.push("/")}>
                Home
            </Button>
            <Button
                type="primary"
                onClick={() => dispatch(routerRedux.push("/"))}
            >
                Home
            </Button>
            <Button type="primary" onClick={getProducts}>
                Add
            </Button>
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array.isRequired,
};

// const mapStateToProps = state => ({ products: state.products });
export default connect(({ products }) => ({ products }))(Products);
