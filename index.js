const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

// const hendler = (req, res) => {
//     res.send('hello from node');
// }
// app.get('/', hendler);

app.get('/', (req, res) => {
    res.send('hello  node, new learning')
});
const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shusmita', email: 'Shusmita@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Shuchona', email: 'Shuchona@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Sharbonti', email: 'Sharbonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Purnima', email: 'Purnima@gmail.com', phone: '01788888888' },
    { id: 6, name: 'Mousumi', email: 'Mousumi@gmail.com', phone: '01788888888' }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    // Use query perameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }

});
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hetting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    console.log(req.params.id);
    res.send(user);
})
app.listen(port, () => {
    console.log('listening to port', port);
});