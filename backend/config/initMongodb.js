import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI;

export const initMongodb = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error connecting to MongoDB", e);
  }
};

export const fetchToken = async ()  => {
  const client = process.env.CLIENT_ID_GAMES;
  const secret = process.env.SECRET_KEY;
  
  const AUTH_GAMES_URL = `https://id.twitch.tv/oauth2/token?client_id=${client}&client_secret=${secret}&grant_type=client_credentials`;

  console.log(AUTH_GAMES_URL);
  try {
    const response = await fetch(AUTH_GAMES_URL, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const accessToken = data.access_token;
    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error:", error);
  }
}