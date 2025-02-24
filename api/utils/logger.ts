import LogModel from "../models/Log";

export const logToDB = async (level: string, message: string, meta?: any) => {
  try {
    await LogModel.create({
      level,
      message,
      meta,
    });
  } catch (error) {
    console.error("❌ Failed to log to DB:", error);
  }
};
