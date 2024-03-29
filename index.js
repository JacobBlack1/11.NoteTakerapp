const express =require('express');
const app = express();

const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.unlencoded({express: true}));
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT,() => console.log(`listening on PORT:https://localhost:${PORT}`))
