CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  document VARCHAR(11) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE carriers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  code INT NOT NULL
);

CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  number VARCHAR(11) NOT NULL UNIQUE,
  carrier_id INT REFERENCES carriers(id),
  client_id INT REFERENCES clients(id),
  description TEXT NOT NULL
);

CREATE TABLE recharges (
  id SERIAL PRIMARY KEY,
  phone_id INT REFERENCES phones(id),
  amount NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Inserts padrão das operadoras
INSERT INTO carriers (name, code) VALUES ('Vivo', 15);
INSERT INTO carriers (name, code) VALUES ('Tim', 41);
INSERT INTO carriers (name, code) VALUES ('Oi', 31);
INSERT INTO carriers (name, code) VALUES ('Claro', 21);
