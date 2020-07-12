package com.forhadhossain.dispatch.factory;

import com.forhadhossain.dispatch.bo.Order;
import com.forhadhossain.dispatch.db.entity.DbOrder;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class OrderMapperTest {
    @Test
    void constructingRestaurant(){
        DbOrder dbRestaurant = new DbOrder();
        dbRestaurant.orderId = 1L;
        dbRestaurant.comments = "Hi";

        Order restaurant = OrderMapper.fromEntity(dbRestaurant);
        assertEquals(1L, restaurant.orderId);
        assertEquals("Hi", restaurant.comments);
    }

}