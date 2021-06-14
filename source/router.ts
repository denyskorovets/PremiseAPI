import { Router } from "express";
import fetch from "node-fetch";

const { API_KEY } = process.env;
const router = Router();
const apiURL = "https://api.themoviedb.org/3";

router.get("/movies/popular", async (req, res) => {
  const response = await fetch(
    `${apiURL}/movie/popular?api_key=${API_KEY}&page=${req.query.page}`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/movies/topRated", async (req, res) => {
  const response = await fetch(
    `${apiURL}/movie/top_rated?api_key=${API_KEY}&page=${req.query.page}`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/movies/upcoming", async (req, res) => {
  const response = await fetch(
    `${apiURL}/movie/upcoming?api_key=${API_KEY}&page=${req.query.page}`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/search/movie", async (req, res) => {
  const response = await fetch(
    `${apiURL}/search/movie?api_key=${API_KEY}&query=${req.query.query}&page=${req.query.page}`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/movie/:id", async (req, res) => {
  const response = await fetch(
    `${apiURL}/movie/${req.params.id}?api_key=${API_KEY}`
  );
  const data = await response.json();
  res.json(data);
});

router.get("/imageConfiguration", async (req, res) => {
  const response = await fetch(`${apiURL}/configuration?api_key=${API_KEY}`);
  const data = await response.json();
  res.json(data);
});

export default router;
