import express from 'express';
import plainListRouter from './routes/plainlist/index.js';
import authRouter from './routes/auth/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api",
    plainListRouter,
    authRouter
);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});