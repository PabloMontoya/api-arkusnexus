module.exports = function(app) {
    
    app.get('/', function(req, res) {
        res.send(`API Users`);
    });
    
    const users = require('./controllers/users');
    app.get('/users', users.findAllUsers);
    app.get('/users/:id', users.findUser);
    app.post('/users/findbyemail', users.findUserByEmail);
    app.post('/users/add', users.addUser);
    app.put('/users/update/:id', users.updateUser);
    app.delete('/users/delete/:id', users.deleteUser);
    
}
