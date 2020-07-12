import React, {useEffect} from 'react';
import {Form, Table} from "semantic-ui-react";
import {orderAction} from "../../actions/order.actions";
import {useDispatch, useSelector} from "react-redux";
import OrderInput from "./order.input";

function Order() {
    const orders = useSelector(state => state.order);
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(orderAction.getAllOrder());
        }, []
    );
    const renderTableHeaderRow = () => {
        return (
            <Table.Row>
                <Table.HeaderCell
                    style={{backgroundColor: "#2c353a", color: "white"}}>
                </Table.HeaderCell>
                <Table.HeaderCell
                    style={{backgroundColor: "#2c353a", color: "white"}}>
                    Customer Details
                </Table.HeaderCell>
                <Table.HeaderCell
                    style={{backgroundColor: "#2c353a", color: "white"}}>
                    Restaurant Details
                </Table.HeaderCell>
                <Table.HeaderCell
                    style={{backgroundColor: "#2c353a", color: "white"}}>
                    Payment Method
                </Table.HeaderCell>
                <Table.HeaderCell
                    style={{backgroundColor: "#2c353a", color: "white"}}>
                    Fee
                </Table.HeaderCell>
                <Table.HeaderCell
                    style={{backgroundColor: "#2c353a", color: "white"}}>
                    Items
                </Table.HeaderCell>
            </Table.Row>
        );
    };
    const renderTableData = (orders) => {
        return orders.map((order) => {
            const {
                orderId,
                customerName,
                customerEmail,
                customerPhone,
                restaurantName,
                restaurantAddress,
                restaurantPhone,
                paymentMethod,
                fee,
                orderItem
            }
                = order;
            return (
                <Table.Row key={orderId}>
                    <Table.Cell>{orderId}</Table.Cell>
                    <Table.Cell>{customerName}, {customerPhone}, {customerEmail}</Table.Cell>
                    <Table.Cell>{restaurantName}, {restaurantPhone}, {restaurantAddress}</Table.Cell>
                    <Table.Cell>{paymentMethod}</Table.Cell>
                    <Table.Cell>{fee}</Table.Cell>
                    <Table.Cell>{orderItem.map(oi => <p key={oi.name}> {oi.name} </p>)}</Table.Cell>
                </Table.Row>
            )
        })
    };
    return (
        <div>
            <h3><b>Orders</b></h3>
            <div>
                <Form>
                    <Form.Group widths='equal'>
                        <OrderInput/>
                    </Form.Group>
                </Form>
            </div>
            <Table celled>
                <Table.Header>
                    {renderTableHeaderRow()}
                </Table.Header>
                <Table.Body>
                    {renderTableData(orders)}
                </Table.Body>
            </Table>
        </div>

    );
}

export default Order;