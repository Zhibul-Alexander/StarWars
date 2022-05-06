import React from "react";
import {Link, Router, Switch } from "react-dom";
import { Main } from "./components/main/main";
import { Items } from "./components/items/Items";
import {Item} from "./components/item/Item";
import {Header} from "./components/header/Header"

export function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        <Router path="/main" exact>
          <Main />
        </Router>
        <Router path="/:type" exact>
          <Items />
        </Router>
        <Router path="/:type/:id" exact>
          <Item />
        </Router>
      </Switch>
    </div>
  )
}