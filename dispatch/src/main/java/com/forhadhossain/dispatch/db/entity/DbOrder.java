package com.forhadhossain.dispatch.db.entity;


import com.forhadhossain.dispatch.constant.PaymentMethod;
import com.forhadhossain.dispatch.constant.OrderStatus;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class DbOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long orderId;
    public String orderNumber;
    public Long companyId;
    public String customerName;
    public String customerEmail;
    public String customerPhone;
    public String restaurantName;
    public String restaurantAddress;
    public String restaurantPhone;
    public Double restaurantLatitude;
    public Double restaurantLongitude;
    public LocalDateTime placementTime;
    public LocalDateTime requestedPickupTime;
    public LocalDateTime customerArrivalTime;
    public String customerInfo;
    @Enumerated(EnumType.STRING)
    public OrderStatus status;
    public LocalDateTime readyTime;
    public LocalDateTime doneTime;
    public LocalDateTime cancelTime;
    public Double totalPayable;
    public Double tax;
    public Double fee;
    public Double discount;
    public Double tip;
    public String comments;
    @Enumerated(EnumType.STRING)
    public PaymentMethod paymentMethod;
    public String orderItem;
    public String provider;

    public DbOrder() {
    }

    public DbOrder(
            Long orderId,
            String orderNumber,
            Long companyId,
            String customerName,
            String customerEmail,
            String customerPhone,
            String restaurantName,
            String restaurantAddress,
            String restaurantPhone,
            Double restaurantLatitude,
            Double restaurantLongitude,
            LocalDateTime placementTime,
            LocalDateTime requestedPickupTime,
            LocalDateTime customerArrivalTime,
            String customerInfo,
            OrderStatus status,
            LocalDateTime readyTime,
            LocalDateTime doneTime,
            LocalDateTime cancelTime,
            Double totalPayable,
            Double discount,
            Double tax,
            Double fee,
            Double tip,
            String comments,
            PaymentMethod paymentMethod,
            String orderItem,
            String provider
    ) {
        this.orderId = orderId;
        this.orderNumber = orderNumber;
        this.companyId = companyId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhone = customerPhone;
        this.restaurantName = restaurantName;
        this.restaurantAddress = restaurantAddress;
        this.restaurantPhone = restaurantPhone;
        this.restaurantLatitude = restaurantLatitude;
        this.restaurantLongitude = restaurantLongitude;
        this.placementTime = placementTime;
        this.requestedPickupTime = requestedPickupTime;
        this.customerArrivalTime = customerArrivalTime;
        this.customerInfo = customerInfo;
        this.status = status;
        this.readyTime = readyTime;
        this.doneTime = doneTime;
        this.cancelTime = cancelTime;
        this.totalPayable = totalPayable;
        this.discount = discount;
        this.tax = tax;
        this.fee = fee;
        this.tip = tip;
        this.comments = comments;
        this.paymentMethod = paymentMethod;
        this.orderItem = orderItem;
        this.provider = provider;
    }
}
