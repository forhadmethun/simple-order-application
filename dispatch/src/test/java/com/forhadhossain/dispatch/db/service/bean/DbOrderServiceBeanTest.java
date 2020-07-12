package com.forhadhossain.dispatch.db.service.bean;

import com.forhadhossain.dispatch.BaseServiceTest;
import com.forhadhossain.dispatch.bo.Order;
import com.forhadhossain.dispatch.constant.OrderStatus;
import com.forhadhossain.dispatch.db.service.DbOrderService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DbOrderServiceBeanTest extends BaseServiceTest {
    @Autowired
    private DbOrderService pickupOrderService;

    @BeforeAll
    void init() throws Exception {
        Order order = new Order();
        order.orderId = 1L;
        order.companyId  = 1L;
        order.placementTime = LocalDateTime.now();
        order.placementTime.minusMinutes(20L);
        order.status  = OrderStatus.CANCEL;
        pickupOrderService.saveOrder(order);

        order.orderId = 2L;
        order.placementTime = LocalDateTime.now();
        order.placementTime.minusMinutes(30L);
        order.status  = OrderStatus.READY;
        pickupOrderService.saveOrder(order);

        order.orderId = 3L;
        order.placementTime = LocalDateTime.now();
        order.status  = OrderStatus.DONE;
        order.placementTime.minusMinutes(1441L);
        pickupOrderService.saveOrder(order);


        order.orderId = 10L;
        order.companyId  = 2L;
        order.status  = OrderStatus.IN_PROGRESS;
        order.placementTime = LocalDateTime.now().minusDays(3L);
        pickupOrderService.saveOrder(order);
    }

    @Test
    void findOrderTest(){
        Order orderFromDB = pickupOrderService.findOrder(1L);
        assertEquals(1L, orderFromDB.orderId);
    }

    @Test
    void findCurrentOrdersTest(){
        var result = pickupOrderService.findCurrentOrders();
        assertEquals(4, result.size());
    }

}