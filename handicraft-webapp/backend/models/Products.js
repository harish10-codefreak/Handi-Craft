const { Pool } = require('pg');

const pool = new Pool();

const createProductTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      userId INTEGER REFERENCES users(id),
      name VARCHAR(100),
      description TEXT,
      price DECIMAL(10, 2),
      category VARCHAR(100),
      images TEXT[],
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await pool.query(query);
};

createProductTable().catch((err) => console.error(err));
