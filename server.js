const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const apiRouter = require('./server/api');
app.use('/api', apiRouter);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
}
);