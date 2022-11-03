import express from 'express';

const app = express();
const port = process.env.SERVER_PORT || 8080;

app.get('/', (req, res) => {
    res.send(`Sample service running on NodeJS ${process.version}\n${JSON.stringify(process.env, null, 2)}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
