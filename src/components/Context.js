import React from 'react';

const DataContext = React.createContext({
  monsters: [],
  getMonsters: () => {}
});

export default DataContext;