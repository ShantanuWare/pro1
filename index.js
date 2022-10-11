// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const app = express();
const PORT = 4000;

// const MONGO_URL= "mongodb://localhost"; // v5
// const MONGO_URL = "mongodb://127.0.0.1"; // v6
const MONGO_URL = process.env.MONGO_URL
  


async function createConnection() {
  const client = new MongoClient(MONGO_URL); // Dialing a number
  await client.connect(); // pressing call button to connect
  console.log("Mongo is connected");
  return client; //to work with db commands
}

const client = await createConnection();
// express.json()--> middleware(inbuilt)
//app.use -->intercepts--> applies express.json()--> middleware(inbuilt)
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 iigjaxaacs");
});

//movies
app.get("/movies", async function (request, response) {
  console.log(request.query);
  // db.movies.find({name: "The Avengers"})
  if (request.query.rating) {
    request.query.rating = +request.query.rating; //converting to string by using + instead of parseInt
  }

  // db.movies.find({})
  const movies = await client
    .db("pro")
    .collection("movies")
    .find(request.query) // find gives you cursor (pagination)
    .toArray();
  response.send(movies); // express converted js objects to json
});

// path for getting movies by id
//movies/:id
app.get("/movies/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params, id);
  // Db.movies.findOne({id:"99"});
  // const movie = movies.find((mv) => mv.id === id); // your code

  const movie = await client.db("pro").collection("movies").findOne({ id: id });

  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ msg: "Movie not found" }); /// ? is used for if statements
});

// create movies
// express.json-->middleware
app.post("/movies", async function (request, response) {
  const data = request.body;
  console.log(data);
  // Db.movies.findOne({id:"99"});
  const result = await client.db("pro").collection("movies").insertMany(data);
  response.send(result);
});

// Delete movies
app.delete ("/movies/:id", async function (request, response) {
  const { id } = request.params;
  // console.log(request.params, id);
  // db.movies.deleteOne({id:"99"});


  const result = await client.db("pro").collection("movies").deleteOne({ id: id });

  console.log(result);
  result.deleteCount > 0
    ? response.send({msg: "Movie deleted successfully."})
    : response.status(404).send({ msg: "Movie not found" }); /// ? is used for if statements
})

//update movie by id
app.put ("/movies/:id", async function (request, response) {
  const { id } = request.params;
  const data =request.body;
  // console.log(request.params, id);
  // db.movies.updateOne({id: id},{$set:data});


  const movie= await client
  .db("pro")
  .collection("movies")
  .updateOne({ id: id }, { $set:data });

  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ msg: "Movie not found" }); /// ? is used for if statements
})

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));







