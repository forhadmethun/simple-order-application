export class OrderInfo {
    constructor(
        customerName,
        customerEmail,
        customerPhone,
        restaurantName,
        restaurantAddress,
        restaurantPhone,
        fee,
        paymentMethod,
        orderItem
    ) {
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
        this.restaurantName = restaurantName;
        this.restaurantAddress = restaurantAddress;
        this.restaurantPhone = restaurantPhone;
        this.fee = fee;
        this.paymentMethod = paymentMethod;
        this.orderItem = [
            {
                "name": orderItem
            }
        ]
    }

    getRequestBody() {
        return {
            "customerName": this.customerName,
            "customerEmail": this.customerEmail,
            "customerPhone": this.customerPhone,
            "restaurantName": this.restaurantName,
            "restaurantAddress": this.restaurantAddress,
            "restaurantPhone": this.restaurantPhone,
            "status": "IN_PROGRESS",
            "fee": this.fee,
            "paymentMethod": this.paymentMethod,
            "orderItem": this.orderItem,
        }
    }
}