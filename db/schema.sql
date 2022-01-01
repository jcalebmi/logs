CREATE TABLE logs (
  log_id SERIAL PRIMARY KEY,
  ip NUMBER,
  date DATE,
  request VARCHAR(20),
  response VARCHAR(20),
  bytes_sent NUMBER,
  referer VARCHAR(200)
)