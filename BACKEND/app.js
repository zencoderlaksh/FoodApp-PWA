import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import ReservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });

// Connecting backend to frontend
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        method: ['POST'],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fix the route path here
app.use('/api/v1/reservation', ReservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
