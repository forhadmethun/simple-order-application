import React, {useState} from 'react';
import {Button, Form, Modal, Radio} from "semantic-ui-react";
import {orderAction} from "../../actions/order.actions";
import {useDispatch, useSelector} from "react-redux";
import {OrderInfo} from "../../model/order.info";

function OrderInput() {
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantPhone, setRestaurantPhone] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('CASH');
    const [fee, setFee] = useState('');
    const [orderItem, setOrderItem] = useState('');

    const buttonStyle = {backgroundColor: '#99dd2c'};

    function handleSubmit(e) {
        e.preventDefault();
        const orderInfo = new OrderInfo(
            customerName,
            customerEmail,
            customerPhone,
            restaurantName,
            restaurantAddress,
            restaurantPhone,
            fee,
            paymentMethod,
            orderItem
        );
        dispatch(orderAction.addOrder(orderInfo));
    }

    const handleChangePayment = (e, {value}) => setPaymentMethod(value);

    return (
        <Modal trigger={<Button>+ New Order</Button>}>
            <Modal.Header>Add a new order</Modal.Header>
            <Modal.Content>
                <Form size='large' onSubmit={handleSubmit}>
                    <Form.Input
                        placeholder='Customer Name'
                        name="customerName"
                        value={customerName}
                        onChange={e => setCustomerName(e.target.value)}
                    />

                    <Form.Input
                        placeholder='Customer Phone'
                        name="customerPhone"
                        value={customerPhone}
                        onChange={e => setCustomerPhone(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Customer Email'
                        name="customerAddress"
                        value={customerEmail}
                        onChange={e => setCustomerEmail(e.target.value)}
                    />

                    <Form.Input
                        placeholder='Restaurant name'
                        name="restaurantName"
                        value={restaurantName}
                        onChange={e => setRestaurantName(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Restaurant phone'
                        name="restaurantPhone"
                        value={restaurantPhone}
                        onChange={e => setRestaurantPhone(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Restaurant Address'
                        name="restaurantAddress"
                        value={restaurantAddress}
                        onChange={e => setRestaurantAddress(e.target.value)}
                    />

                    <Form.Field>
                        Payment Method
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='Cash'
                            name='paymentMethod'
                            value='CASH'
                            checked={paymentMethod === 'CASH'}
                            onChange={handleChangePayment}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Card'
                            name='paymentMethod'
                            value='CARD'
                            checked={paymentMethod === 'CARD'}
                            onChange={handleChangePayment}
                        />
                    </Form.Field>

                    <Form.Input
                        placeholder='Fee'
                        type="number"
                        name="fee"
                        value={fee}
                        onChange={e => setFee(e.target.value)}
                    />
                    <Form.Input
                        placeholder='Item Name'
                        name="orderItem"
                        value={orderItem}
                        onChange={e => setOrderItem(e.target.value)}
                    />

                    <Button
                        style={buttonStyle}
                        fluid
                        size='large'
                    >
                        Save details
                    </Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}

export default OrderInput;