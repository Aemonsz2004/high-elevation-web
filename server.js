const express = require('express');
const app = express();
// const productRoutes = require('./routes/products');
// const orderRoutes = require('./routes/orders');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Specify the views folder

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static('public'));

// Route files
// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);

// ✅ Home route (renders index.ejs)
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to High Elevation Web' });
});

app.get('/products', (req, res) => {
    res.render('products/product', { title: 'Welcome to High Elevation Web' });
});

app.get('/profile', (req, res) => {
    res.render('users/profile.ejs', { title: 'Welcome to High Elevation Web' });
});

app.get('/login', (req, res) => {
    res.render('login/login.ejs', {title: "Welcome to High Elevation Web" });
})
app.get('/signup', (req, res)=> {
    res.render('signup/signup.ejs', {title: "Welcome to High Elevation Web"});
})

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
