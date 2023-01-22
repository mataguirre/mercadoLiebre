module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('pages/login');
    },
    register: (req, res) => {
        res.render('pages/register');
    },
    products: (req, res) => {
        res.render('pages/products');
    }
}