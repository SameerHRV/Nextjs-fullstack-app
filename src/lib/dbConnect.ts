import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI! || "", {
      dbName: process.env.MONGODB_NAME,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("connected to db and its Host", db.connection.host);
  } catch (error: any) {
    console.log("Database connection failed", error.message);
    process.exit(1);
  }
};

export default dbConnect;
