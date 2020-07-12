package com.forhadhossain.dispatch.db.service;

import com.forhadhossain.dispatch.bo.Order;

import javax.persistence.PersistenceException;
import java.util.List;

public interface DbOrderService {

    List<Order> findCurrentOrders();

    Order findOrder(Long orderId) throws PersistenceException;

    Order saveOrder(Order order);
}
