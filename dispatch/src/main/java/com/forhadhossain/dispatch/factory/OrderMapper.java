package com.forhadhossain.dispatch.factory;

import com.forhadhossain.dispatch.bo.Order;
import com.forhadhossain.dispatch.bo.OrderItem;
import com.forhadhossain.dispatch.db.entity.DbOrder;

public class OrderMapper {
    public static Order fromEntity(DbOrder dbOrder) {
        return new Order(
                dbOrder.orderId,
                dbOrder.orderNumber,
                dbOrder.companyId,
                dbOrder.customerName,
                dbOrder.customerEmail,
                dbOrder.customerPhone,
                dbOrder.restaurantName,
                dbOrder.restaurantAddress,
                dbOrder.restaurantPhone,
                dbOrder.restaurantLatitude,
                dbOrder.restaurantLongitude,
                dbOrder.placementTime,
                dbOrder.requestedPickupTime,
                dbOrder.customerArrivalTime,
                dbOrder.customerInfo,
                dbOrder.status,
                dbOrder.readyTime,
                dbOrder.doneTime,
                dbOrder.cancelTime,
                dbOrder.totalPayable,
                dbOrder.discount,
                dbOrder.tax,
                dbOrder.fee,
                dbOrder.tip,
                dbOrder.comments,
                dbOrder.paymentMethod,
                OrderItem.fromString(dbOrder.orderItem),
                dbOrder.provider
        );
    }
    public static DbOrder fromBusinessObject(Order order) {
        return new DbOrder(
                order.orderId,
                order.orderNumber,
                order.companyId,
                order.customerName,
                order.customerEmail,
                order.customerPhone,
                order.restaurantName,
                order.restaurantAddress,
                order.restaurantPhone,
                order.restaurantLatitude,
                order.restaurantLongitude,
                order.placementTime,
                order.requestedPickupTime,
                order.customerArrivalTime,
                order.customerInfo,
                order.status,
                order.readyTime,
                order.doneTime,
                order.cancelTime,
                order.totalPayable,
                order.discount,
                order.tax,
                order.fee,
                order.tip,
                order.comments,
                order.paymentMethod,
                OrderItem.toString(order.orderItem),
                order.provider
        );
    }
}
