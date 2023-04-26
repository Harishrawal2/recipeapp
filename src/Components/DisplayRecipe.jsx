import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Recipe from "./Recipe";
import axios from "axios";

const DisplayRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("paneer");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const APP_ID = "ae433745";
  const APP_KEY = "b599417842b40e679105654809d79773";

  const getRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(response.data.hits);
    // console.log("Data", response.data);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      alert("Search Input is Empty");
    } else {
      setQuery(search);
      setSearch("");
    }
  };

  return (
    <Container className="mt-3">
      <Form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={getSearch}
      >
        <Form.Control
          type="text"
          value={search}
          placeholder="Search Recipe...."
          onChange={updateSearch}
        />
        <Button className="m-3" type="submit">
          Search
        </Button>
      </Form>
      <div>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.level}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </Container>
  );
};
export default DisplayRecipe;
