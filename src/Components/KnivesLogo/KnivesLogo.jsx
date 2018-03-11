import React from 'react';

import './kniveslogo.scss';

const KnivesLogo = (props) => {
    return (
      <div className={"kniveslogo " + props.className}>
          <span className="k">K</span>
          <span className="n">N</span>
          <span className="i">I</span>
          <span className="v">V</span>
          <span className="e">E</span>
          <span className="s">S</span>
      </div>
    );
};

export default KnivesLogo;