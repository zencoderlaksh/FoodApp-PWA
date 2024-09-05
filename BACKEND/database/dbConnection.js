import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'FOODAPP'
    })
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((err) => {
        console.log(`Error connecting to the database! ${err}`);
    });
}
