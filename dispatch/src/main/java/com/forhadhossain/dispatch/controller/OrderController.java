package com.forhadhossain.dispatch.controller;

import com.forhadhossain.dispatch.bo.Order;
import com.forhadhossain.dispatch.db.service.DbOrderService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.PersistenceException;
import java.util.List;

@RestController
public class OrderController {
    private final DbOrderService dbOrderService;

    public OrderController(DbOrderService dbOrderService) {
        this.dbOrderService = dbOrderService;
    }

    @GetMapping("/order")
    public ResponseEntity<List<Order>> getOrders(
    ) {
        return new ResponseEntity<>(dbOrderService.findCurrentOrders(), HttpStatus.OK);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<Order> getAOrder(
            @PathVariable("orderId") Long orderId
    ) throws PersistenceException {
        return new ResponseEntity<>(dbOrderService.findOrder(orderId), HttpStatus.OK);
    }

    @PostMapping("/order")
    public ResponseEntity<Order> addOrder(
            @RequestBody Order order
    ) {
        return new ResponseEntity<>(dbOrderService.saveOrder(order), HttpStatus.CREATED);
    }
}
