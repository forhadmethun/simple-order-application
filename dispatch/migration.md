Order
------------
## Database Structure
```sql
create table Order (
    order_id bigint primary key auto_increment,
    order_number varchar(128) not null,
    company_id bigint not null,
    customer_name varchar(100) not null,
    customer_email varchar(100) default null,
    customer_phone varchar(20) not null,
    restaurant_name varchar (128) not null,
    restaurant_address varchar (256) not null,
    restaurant_phone varchar (20) default null,
    restaurant_latitude double not null,
    restaurant_longitude double not null,
    placement_time datetime not null,
    requested_pickup_time datetime not null,
    customer_arrival_time datetime,
    customer_info varchar (256) default null,
    status enum('IN_PROGRESS', 'READY', 'DONE', 'CANCEL'),
    ready_time datetime,
    done_time datetime,
    cancel_time datetime,
    total_payable double not null,
    tax double default null,
    fee double default null,
    discount double default null,
    tip double default null,
    comments varchar(256) default null,
    payment_method enum('CARD', 'CASH', 'ONLINE') default 'CASH',
    order_item longtext,
    provider varchar(32) not null
)
```