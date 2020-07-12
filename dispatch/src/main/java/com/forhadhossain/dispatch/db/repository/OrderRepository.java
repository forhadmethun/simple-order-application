package com.forhadhossain.dispatch.db.repository;

import com.forhadhossain.dispatch.db.entity.DbOrder;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<DbOrder, Long> {

}
