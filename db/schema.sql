CREATE TABLE logs (
  log_id SERIAL PRIMARY KEY,
  date DATE,
  message_type VARCHAR(20),
  message VARCHAR(1000),
)