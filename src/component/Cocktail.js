import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BarreNav from "./asset/BarreNav";

function Cocktail() {
  const [cocktail, setCocktail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("vodka");
  const ajouterCocktail = async () => {
    let options = {
      method: "GET",
    };
    let reponse = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
      options
    );
    let donnees = await reponse.json();
    setCocktail(donnees.drinks);
  };
  useEffect(() => {
    ajouterCocktail();
  }, []);

  useEffect(() => {
    console.log(cocktail);
  }, [cocktail]);

  const handleClick = async () => {
    if (searchTerm === "") {
      alert("Veuillez rentrer une recherche pour accéder à des articles");
    } else {
      const options = {
        method: "GET",
      };

      // j'appelle mon API
      let response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        options
      );
      // je la transforme en fichier lisible par JS donc j'utilise mon .json()
      let data = await response.json();

      //je vérifie ce qu'il y a dans ma data qui est maintenant lisible en JSON
      console.log("data", data);

      // je récupère uniquement que les articles de mon objet
      setCocktail(data.drinks);
    }
  };

  const renderMyArticle = () => {
    return (
      <div className="test">
        <input
          className="recherche"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Recherche"
        ></input>
        <button onClick={handleClick} className="valider">
          Valider
        </button>

        {cocktail.map((item) => (
          <div className="essai">
            <li key={item.strDrink} className="li">
              <h1>{item.strDrink}</h1>
              {/* <div
                className="img"
                style={{
                  backgroundImage: `url(${item.strDrinkThumb})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "100%",
                }}
              ></div> */}
              <h2>{item.strInstructions}</h2>
              <h4>{item.strIngredient1}</h4>
              <h4>{item.strIngredient2}</h4>
              <h4>{item.strIngredient3}</h4>
              <h4>{item.strIngredient4}</h4>
              <h4>{item.strIngredient5}</h4>
              <h4>{item.strIngredient6}</h4>
              <h4>{item.strIngredient7}</h4>
              <h4>{item.strIngredient8}</h4>
              <h4>{item.strIngredient9}</h4>
              <h4>{item.strIngredient10}</h4>
              <h4>{item.strIngredient11}</h4>
              <h4>{item.strIngredient12}</h4>
              <h4>{item.strIngredient13}</h4>
              <h4>{item.strIngredient14}</h4>
              <h4>{item.strIngredient15}</h4>
              <img src={item.strDrinkThumb}></img>
            </li>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="App">
      {renderMyArticle()}
      <BarreNav />
    </div>
  );
}

export default Cocktail;
