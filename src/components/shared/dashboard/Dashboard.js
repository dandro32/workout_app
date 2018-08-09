import React from 'react';
import Card from '../card/Card.js';
import PropTypes from 'prop-types';

const Dashboard = ({cards}) => {
  const dashboardCards = cards.map((card, i) => {
    return <Card key={i} card={card} />;
  });

  return (
    <div className="row justify-content-center align-self-center">
      {dashboardCards}
    </div>
  );
};

Dashboard.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Dashboard;