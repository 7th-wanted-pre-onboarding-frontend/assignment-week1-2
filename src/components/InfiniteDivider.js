import React from 'react';

const InfiniteDivider = React.forwardRef((_, ref) => (
  <section
    ref={ref}
    style={{
      height: '10px'
    }}
  />
));

export default InfiniteDivider;
