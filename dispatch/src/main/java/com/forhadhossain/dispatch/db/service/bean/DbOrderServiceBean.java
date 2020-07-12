package com.forhadhossain.dispatch.db.service.bean;

import com.forhadhossain.dispatch.bo.Order;
import com.forhadhossain.dispatch.db.entity.DbOrder;
import com.forhadhossain.dispatch.db.repository.OrderRepository;
import com.forhadhossain.dispatch.factory.OrderMapper;
import com.forhadhossain.dispatch.db.service.DbOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.PersistenceException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class DbOrderServiceBean implements DbOrderService {
    private OrderRepository orderRepository;
    @Autowired
    public DbOrderServiceBean(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    @Override
    public List<Order> findCurrentOrders() {
        var dbOrders = orderRepository.findAll();
        return iterableToList(dbOrders);
    }
    @Override
    public Order findOrder(Long orderId) throws PersistenceException {
        var pickupOrderOptional = orderRepository.findById(orderId);
        if(pickupOrderOptional.isEmpty())
            throw new PersistenceException("No order found.");
        var dbPickupOrder = pickupOrderOptional.get();
        return OrderMapper.fromEntity(dbPickupOrder);
    }
    @Override
    public Order saveOrder(Order order) {
        var dbPickupOrder = OrderMapper.fromBusinessObject(order);
        return OrderMapper.fromEntity(orderRepository.save(dbPickupOrder));
    }

    private List<Order> iterableToList(Iterable<DbOrder> pickupOrders) {
        return StreamSupport.stream(pickupOrders.spliterator(), false)
                .map(OrderMapper::fromEntity)
                .collect(Collectors.toList());
    }
}
