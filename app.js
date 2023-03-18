const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const envelopesRouter = require("./server/envelopes");
app.use('/envelopes', envelopesRouter);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
}
);