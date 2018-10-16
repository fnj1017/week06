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
