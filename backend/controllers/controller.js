import dotenv from "dotenv";
dotenv.config();
import { Resenas } from "../models/resenas.js";

import { fetchToken } from "../config/initMongodb.js";

export const getGamesAPI = async (req, res) => {
    const body = "fields name,rating, screenshots.url; sort rating desc;"
    try {
        const getToken = await fetchToken();
        const response = await fetch("https://api.igdb.com/v4/games/", {
            headers: {
                "Client-ID": process.env.CLIENT_ID_GAMES,
                Authorization: `Bearer ${getToken}`,
            },
            method: "POST",
            body: body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

export const getResenas = async (req, res) => {
    try {
        const resenas = await Resenas.find();
        res.json(resenas);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

export const createResena = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.review) {
            return res.status(400).json({ error: 'Name and resena are required' });
        }
        const resena = new Resenas(req.body);
        await resena.save();
        res.status(201).json(resena);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred' });
    }
}
