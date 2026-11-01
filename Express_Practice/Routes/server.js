import express from 'express';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Task 1: Route Parameters
app.get('/products/:productId', (req, res) => {
    const { productId } = req.params;
    res.send(`Product ID: ${productId}`);
});

// Task 2: Query Parameters
app.get('/products', (req, res) => {
    const { category, price } = req.query;
    res.send(`Category: ${category}, Price: ${price}`);
});

// Task 3: POST /users
app.post('/users', (req, res) => {
    console.log('Request body:', req.body);

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required');
    }

    return res.status(201).send(
        `User created: Name - ${name}, Email - ${email}`
    );
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});