import React from 'react';

export default props => (
  <div>
    <input onChange={e => props.filter(e.target.value)} />
  </div>
);
