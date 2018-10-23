/*
create table just
  (
    size char(50) not null,
    price float(2) not null,
    --description char(200) not null
  );

create table cafe
  (
    size char(50) not null,
    price float(2) not null,
    --description char(200) not null
  );

  create table cappuccino
    (
      size char(50) not null,
      price float(2) not null,
      --description char(200) not null
    );
*/

    CREATE TABLE `order` (
      `item_id` int(10) NOT NULL,
      `name` char(50) NOT NULL,
      `size` char(50) NOT NULL,
      `qty` int(10) NOT NULL,
      `amount` float NOT NULL
    );

    INSERT INTO `order` (`item_id`, `name`, `size`, `qty`, `amount`) VALUES
    (1, 'Just Java', 'Endless Cup', 3, 6.00),
    (1, 'Just Java', 'Endless Cup', 1, 2.00),
    (1, 'Just Java', 'Endless Cup', 1, 2.00),
    (1, 'Just Java', 'Endless Cup', 5, 10.00),
    (1, 'Just Java', 'Endless Cup', 1, 2.00),
    (1, 'Just Java', 'Endless Cup', 4, 8.00),
    (2, 'Cafe au Lait', 'Single', 1, 2.00),
    (3, 'Cafe au Lait', 'Double', 1, 3.00),
    (4, 'Iced Cappuccino', 'Single', 1, 4.75),
    (5, 'Iced Cappuccino', 'Double', 1, 5.75),
    (2, 'Cafe au Lait', 'Single', 3, 6.00),
    (3, 'Cafe au Lait', 'Double', 1, 3.00),
    (4, 'Iced Cappuccino', 'Single', 1, 4.75),
    (5, 'Iced Cappuccino', 'Double', 1, 5.75),
    (2, 'Cafe au Lait', 'Single', 1, 2.00),
    (3, 'Cafe au Lait', 'Double', 2, 6.00),
    (4, 'Iced Cappuccino', 'Single', 1, 4.75),
    (5, 'Iced Cappuccino', 'Double', 1, 5.75),
    (2, 'Cafe au Lait', 'Single', 1, 2.00),
    (3, 'Cafe au Lait', 'Double', 2, 6.00),
    (4, 'Iced Cappuccino', 'Single', 1, 4.75),
    (5, 'Iced Cappuccino', 'Double', 1, 5.75);


    CREATE TABLE `menu` (
      `item_id` int(10) NOT NULL,
      `name` char(50) NOT NULL,
      `size` char(50) NOT NULL,
      `price` float NOT NULL
    );

    INSERT INTO `menu` (`item_id`, `name`, `size`, `price`) VALUES
    (1, 'Just Java', 'Endless Cup', 2.00),
    (2, 'Cafe au Lait', 'Single', 2.00),
    (3, 'Cafe au Lait', 'Double', 3.00),
    (4, 'Iced Cappuccino', 'Single', 4.75),
    (5, 'Iced Cappuccino', 'Double', 5.75);


--  ALTER TABLE just
--    MODIFY size char(50) not null;
