import mongoose from 'mongoose';

const connection = {};

export const connectDB = async () => {
  try {
    if (connection.connected) {
      console.log('Using the existing connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.connected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
