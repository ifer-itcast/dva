import React from "react";
import PropTypes from "prop-types";
import { Table, Popconfirm, Button } from "antd";
import { connect } from "dva";

const Products = ({ dispatch, products }) => {
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
    return <Table dataSource={products} columns={columns} />
};

Products.propTypes = {
    products: PropTypes.array.isRequired,
};

// const mapStateToProps = state => ({ products: state.products });
export default connect(({ products }) => ({ products }))(Products);
