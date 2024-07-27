const pool = require('../config/db');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, description, price, category, images } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, description, price, category, images) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, description, price, category, images]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
