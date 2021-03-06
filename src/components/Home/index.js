import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

import straw from "./straw.gif";
import RecipeCard from "../RecipeCard";
import FunFactCard from "../FunFactCard";
import useHomeData from "hooks/useHomeData";

export default function Home(props) {
  const { state } = useHomeData();

  const { daily_cocktail, most_pop_alc, most_pop_non, flavours, funfact } = state;

  return (
    <main className="home__layout">
      <div className="home__layout-header">
        <div>
        <img src={straw} alt="Drink1" />
        </div>
        <h3>Welcome to CocktailSage, the app you turn to for cocktail guidance.</h3>
      </div>
        <section className="home__layout-upper">
          <div className="home__layout-group">
            {daily_cocktail.recipe && (
              <>
              <h2 className="home__headings">
                <FontAwesomeIcon icon="cocktail" size="lg" />
                Cocktail of the Day
              </h2>
              <RecipeCard user={props.user.user} recipe={daily_cocktail} flavours={flavours} />
              </>
            )}
          </div>
          <div className="home__layout-group">
            {funfact && (
            <>
              <h2 className="home__headings">
                <FontAwesomeIcon icon="wine-glass-alt" size="lg" />
                Fun Fact
              </h2>
              <FunFactCard text={funfact.text} image_url={funfact.image_url} />
            </>
            )}
          </div>
        </section>
        <section className="home__layout-upper">
          <div className="home__layout-group">
            {most_pop_alc.recipe && (
            <>
              <h2 className="home__headings">
                <FontAwesomeIcon icon="glass-cheers" size="lg" />
                Best Rated Alcoholic
              </h2>
              <RecipeCard user={props.user.user} recipe={most_pop_alc} flavours={flavours} />
            </>
            )}
          </div>
          <div className="home__layout-group">
            {most_pop_non.recipe && (
              <>
              <h2 className="home__headings">
                <FontAwesomeIcon icon="lemon" size="lg" />
                Best Rated Non-Alcoholic
              </h2>
              <RecipeCard user={props.user.user} recipe={most_pop_non} flavours={flavours} />
              </>
            )}
          </div>
        </section>
    </main>
  );
}
