import React from 'react';

export default React.memo(function DemoOutput(props) {
  console.log('demo');
  return <p>{props.show && 'New paragraph'}</p>;
});
