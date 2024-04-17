import express from "express";
import { createResena, getGamesAPI } from "../controllers/controller.js";

const router = express.Router();

/**
 * @openapi
 * components:
 *   schemas:
 *     Juego:
 *       type: object
 *       required:
 *         - nombre
 *         - desarrollador
 *         - fechaLanzamiento
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: El ID único del juego.
 *         nombre:
 *           type: string
 *           description: Nombre del juego.
 *         desarrollador:
 *           type: string
 *           description: Nombre del desarrollador del juego.
 *         fechaLanzamiento:
 *           type: string
 *           format: date
 *           description: Fecha de lanzamiento del juego.
 *     Resena:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phone
 *         - review
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del autor de la reseña.
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del autor de la reseña.
 *         phone:
 *           type: number
 *           format: integer
 *           description: Teléfono del autor de la reseña.
 *         review:
 *           type: string
 *           description: Contenido de la reseña.
 */

/**
 * @openapi
 * /api/games:
 *   get:
 *     summary: Obtener todos los juegos
 *     description: Endpoint para obtener una lista de todos los juegos disponibles.
 *     responses:
 *       200:
 *         description: Lista de juegos obtenida correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Juego'
 */
router.get("/games", getGamesAPI);
/**
 * @openapi
 * /api/resena:
 *   post:
 *     summary: Crear una nueva reseña
 *     description: Endpoint para crear una nueva reseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resena'
 *     responses:
 *       201:
 *         description: Reseña creada correctamente.
 *       400:
 *         description: Error de solicitud, datos inválidos.
 */
router.post("/resena", createResena)

export default router;