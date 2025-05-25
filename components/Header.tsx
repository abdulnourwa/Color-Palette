
import React from 'react';
import { useAppContext } from '../App';

const Header: React.FC = () => {
  const { currentStrings } = useAppContext();

  return (
    <div className="page-title-header">
      <h1><i className="fa-solid fa-tooth"></i>{currentStrings('pageTitle')}</h1>
      <p>{currentStrings('pageSubtitle')}</p>
    </div>
  );
};

export default Header;