import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import TodosPage from "./components/TodosPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

    return (
      <BrowserRouter>
        <Route path={'/'} exact>
          <TodosPage/>
        </Route>
        <Route path={'/:id'}>
          <TodoItemPage/>
        </Route>
      </BrowserRouter>
    );
};

export default App;
