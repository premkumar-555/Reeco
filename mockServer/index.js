const jsonSever = require('json-server');
const server = jsonSever.create();
const router = jsonSever.router('mockData.json');
const middleWares = jsonSever.defaults()
const PORT = process.env.PORT || 3000;
require('dotenv').config();

server.use(middleWares);
server.use(jsonServer.bodyParser)
server.use(router);
server.listen(PORT, async(req, res) => {
    try {
        console.log('JSON Server is running on PORT ', PORT)
    } catch (error) {
        
    }
})