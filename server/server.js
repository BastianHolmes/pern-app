import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbModule from "./db/index.js";
import cors from "cors";

dotenv.config();

const app = express();
const Port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const result = await dbModule.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        restaurant: result.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//get one restaurant

app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const restaurant = await dbModule.query(
      "SELECT * FROM restaurants WHERE  id = $1",
      [req.params.id]
    );

    const review = await dbModule.query(
      "SELECT * FROM reviews WHERE  restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      results: restaurant.rows.length,
      data: {
        restaurant: restaurant.rows[0],
        review: review.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/restaurants/", async (req, res) => {
  try {
    const result = await dbModule.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await dbModule.query(
      "UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await dbModule.query("DELETE FROM restaurants WHERE id=$1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is up and listen on port 3005");
});
