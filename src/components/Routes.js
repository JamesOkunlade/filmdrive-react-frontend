import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import MoviesById from "../containers/MovieById";
import Movies from "../containers/Movies";
import NotFound from "../containers/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path= {`/movie/:movieId`} component={MoviesById} />
        <Route path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
