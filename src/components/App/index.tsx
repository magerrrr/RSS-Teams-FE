import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { TeamsList, LoginPage, StudentsTable, CallBack } from 'modules';
import { PrivateRoute, Loader } from 'components';
import { selectToken } from 'modules/LoginPage/selectors';
import { AUTH_TOKEN, SET_TOKEN } from 'appConstants';
import { getCookie, setGithubId } from 'service/cookies';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = getCookie(AUTH_TOKEN);
    console.log(loginToken);
    // const loginToken = localStorage.getItem(AUTH_TOKEN);
    dispatch({ type: SET_TOKEN, payload: loginToken });
    setLoading(false);
  }, [dispatch]);
  if (loading) return <Loader />;
  return (
    <Switch>
      <PrivateRoute
        path="/"
        exact
        isLoggedIn={!!loginToken}
        component={StudentsTable}
      />
      <PrivateRoute
        exact
        path="/teamsList"
        isLoggedIn={!!loginToken}
        component={TeamsList}
      />
      <PrivateRoute
        exact
        path="/editProfile"
        isLoggedIn={!!loginToken}
        component={StudentsTable}
      />
      <Route exact path="/login" component={LoginPage} />
      <Route
        exact
        path="/callback"
        render={(props) => <CallBack props={props} setGithubId={setGithubId} />}
      />
    </Switch>
  );
};
