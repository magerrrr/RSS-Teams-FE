import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, Error } from 'components';
import { Team } from 'types';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';

export const TeamsList: FC = () => {
  const reactCourseId = '9c5a1bee-efb7-4eae-b306-c3d2061e9a32';
  const userData = useSelector(selectUserData);

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId,
  });
  const loading = loadingT;
  const error = errorT;

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div>
      <p>Teams length {teams.count}</p>
      {teams &&
        teams.results.map((item: Team) => {
          return <div key={item.id}>Team №{item.number}</div>;
        })}
      <p>This is teams list!</p>
      {userData && <p>My github: {userData.github}</p>}
      {userData && <p>My firstName: {userData.firstName}</p>}
      {userData && <p>My lastName: {userData.lastName}</p>}
      {userData && <p>My telegram: {userData.telegram}</p>}
      {userData && <p>My discord: {userData.discord}</p>}
      {userData && <p>My score: {userData.score}</p>}
      {userData && <p>My country: {userData.country}</p>}
      {userData && <p>My city: {userData.city}</p>}
      {userData && <p>My courseIds: {userData.courseIds[0]}</p>}
      <Link to="/studentsTable">Dashboard</Link>
      <br />
      <Link to="/editProfile"> Edit Profile</Link>
    </div>
  );
};
