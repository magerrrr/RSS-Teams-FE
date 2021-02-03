import React, { FC } from 'react';
import { Logo } from 'typography';
import { Header } from 'components/Header';

export const StudentsTable: FC = () => {
  return (
    <div>
      <Header />
      <Logo />
      <p>This is students table!</p>
    </div>
  );
};
