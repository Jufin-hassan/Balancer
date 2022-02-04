import React from 'react';

const Card = () => {
  return <div className='card'>
      <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Supervisor</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="box box-down blue">
      <h2>Calculator</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>Karma</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
  </div>;
};

export default Card;
