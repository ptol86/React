import React from "react";
import User from "./User";
import { Link, Route, Switch } from "react-router-dom";

const Users = ({match}) => {
    return (
      <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
              <li className="navigation__item">
                <Link to={`${match.url}/github`}>Github</Link>
              </li>
              <li className="navigation__item">
                <Link to={`${match.url}/facebook`}>Facebook</Link>
              </li>
              <li className="navigation__item">
                <Link to={`${match.url}/microsoft`}>Microsoft</Link>
              </li>
              <li className="navigation__item">
                <Link to={`${match.url}/instagram`}>Instagram</Link>
              </li>
          </ul>
          <Switch>
            <Route exact path={match.url} >
              <span>Select a user please</span>
            </Route>
            <Route path={`${match.url}/:userId`}>
              <User />
            </Route>
          </Switch>
      </div>
    );
  
}

export default Users; 