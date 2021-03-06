import React, { FC } from 'react';
import { PageTitle } from 'typography';

import { TeamsHeader } from './components';
import { MyTeam } from './components';
import { Team, TeamList } from 'types';
import { TeamItem } from './components';

type TeamsProps = {
  teams: TeamList;
  title?: string;
  myTeam?: Team;
  userId: string;
};

export const Teams: FC<TeamsProps> = ({
  title = 'Teams',
  teams,
  myTeam,
  userId,
}) => (
  <>
    <PageTitle>{title}</PageTitle>
    {myTeam ? <MyTeam team={myTeam} userId={userId} /> : <TeamsHeader />}
    {teams.count !== 0 &&
      teams.results.map((team) => (
        <TeamItem
          key={`team-${team.number}}`}
          name={`Team ${team.number}`}
          countMember={team.members.length}
          members={team.members}
        />
      ))}
  </>
);
