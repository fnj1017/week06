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
      `item` char(50) NOT NULL,
      `size` char(50) NOT NULL,
      `qty` int(10) NOT NULL,
      `amount` float NOT NULL
    );

    INSERT INTO `order` (`item`, `size`, `qty`, `amount`) VALUES
    ('Just Java', 'Endless Cup', 3, 6.00),
    ('Just Java', 'Endless Cup', 1, 2.00),
    ('Just Java', 'Endless Cup', 1, 2.00),
    ('Just Java', 'Endless Cup', 5, 10.00),
    ('Just Java', 'Endless Cup', 1, 2.00),
    ('Just Java', 'Endless Cup', 4, 8.00),
    ('Cafe au Lait', 'Single', 1, 2.00),
    ('Cafe au Lait', 'Double', 1, 3.00),
    ('Iced Cappuccino', 'Single', 1, 4.75),
    ('Iced Cappuccino', 'Double', 1, 5.75),
    ('Cafe au Lait', 'Single', 3, 6.00),
    ('Cafe au Lait', 'Double', 1, 3.00),
    ('Iced Cappuccino', 'Single', 1, 4.75),
    ('Iced Cappuccino', 'Double', 1, 5.75),
    ('Cafe au Lait', 'Single', 1, 2.00),
    ('Cafe au Lait', 'Double', 2, 6.00),
    ('Iced Cappuccino', 'Single', 1, 4.75),
    ('Iced Cappuccino', 'Double', 1, 5.75),
    ('Cafe au Lait', 'Single', 1, 2.00),
    ('Cafe au Lait', 'Double', 2, 6.00),
    ('Iced Cappuccino', 'Single', 1, 4.75),
    ('Iced Cappuccino', 'Double', 1, 5.75);


    CREATE TABLE `menu` (
      `name` char(50) NOT NULL,
      `size` char(50) NOT NULL,
      `price` float NOT NULL
    );

    INSERT INTO `menu` (`name`, `size`, `price`) VALUES
    ('Just Java', 'Endless Cup', 2.00),
    ('Cafe au Lait', 'Single', 2.00),
    ('Cafe au Lait', 'Double', 3.00),
    ('Iced Cappuccino', 'Single', 4.75),
    ('Iced Cappuccino', 'Double', 5.75);


--  ALTER TABLE just
--    MODIFY size char(50) not null;
