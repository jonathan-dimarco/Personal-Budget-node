const express = require('express');
const app = express();


const envelopesRouter = require("./server/envelopes");
app.use('/api/envelopes', envelopesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
}
);