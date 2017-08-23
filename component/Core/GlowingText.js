import React from 'react';

import colors from '../../utils/colors';

const GlowingText = ({ children }) => (
  <h2 className="neon-text">
    {children}
    <style jsx>{`
      .neon-text {
        color: ${colors.cyan};
        text-shadow: 0 0 10px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 20px #2eb5db;
      }
    `}</style>
  </h2>
);

export default GlowingText;
