import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {
  TeamsList,
  LoginPage,
  StudentsTable,
  TokenPage,
  NotFoundPage,
  EditProfile,
  ModalSamples,
} from 'modules';
import { Loader, PrivateRoute, Header } from 'components';
import { selectToken } from 'modules/LoginPage/selectors';
import {
  AUTH_TOKEN,
  SET_CURR_COURSE,
  SET_TOKEN,
  SET_USER_DATA,
} from 'appConstants';
import { useWhoAmIQuery } from 'hooks/graphql';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);
  const { loadingW, whoAmI } = useWhoAmIQuery({
    skip: loginToken === null,
  });
  const newUserCheck = whoAmI?.telegram;

  useEffect(() => {
    if (!loginToken) {
      const token = sessionStorage.getItem(AUTH_TOKEN);
      if (token) dispatch({ type: SET_TOKEN, payload: token });
    }

    if (!!whoAmI) {
      dispatch({ type: SET_USER_DATA, payload: whoAmI });
    }
    if (whoAmI?.courses[0])
      dispatch({ type: SET_CURR_COURSE, payload: whoAmI?.courses[0] });

    if (!loadingW) setLoading(false);
  }, [dispatch, loginToken, loadingW, loading, whoAmI]);

  if (loading || loadingW) return <Loader />;

  return (
    <>
      <Header />

      <Switch>
        <PrivateRoute
          path="/"
          exact
          isLoggedIn={!!loginToken}
          newUserCheck={newUserCheck}
          component={TeamsList}
        />
        <PrivateRoute
          exact
          path="/studentsTable"
          isLoggedIn={!!loginToken}
          newUserCheck={newUserCheck}
          component={StudentsTable}
        />
        <PrivateRoute
          path="/modals"
          exact
          isLoggedIn={!!loginToken}
          newUserCheck={newUserCheck}
          component={ModalSamples}
        />
        <Route exact path="/token/:id" component={TokenPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};
