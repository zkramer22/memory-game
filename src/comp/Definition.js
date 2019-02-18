import React from 'react';

const Definition = (props) => {
  const { word, def } = props;

  return (
    <div className="definition-wrapper">
      <p>{ word }: { def }</p>
    </div>
  );
}

export default Definition;
