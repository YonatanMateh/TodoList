const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRouter = require("./routes/task.route");
const errorHandler = require('./middlewares/errorHandler');
const config = require("./config/index");
const { AppError } = require('./utils/AppError');
const db = require("./db/connection");
const app = express();

if (config.environment !== "production") {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000'
        ],
        credentials: true
    };
    app.use(cors(corsOptions));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/task', taskRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorHandler);

(async () => {
    try {
        await app.listen(config.port);
        console.log(`server listening on port: ${config.port}`);
        await db();
    } catch (error) {
        console.error(error)
    }
}
)();