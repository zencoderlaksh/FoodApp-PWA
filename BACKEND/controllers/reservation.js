import ErrorHandler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler('Please fill out the full reservation form', 400));
    }
    try {
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });
        res.status(200).json({
            success: true,
            message: 'Reservation created successfully',
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ErrorHandler(validationErrors.join(','), 400));
        }
        next(error);  // Pass the error to the error middleware
    }
};
