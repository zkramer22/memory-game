import React from 'react';

const Definition = (props) => {
  const { name, type, def, img, isActive } = props;
  let typeChar
  if (type === 'Powerup') { typeChar = '✤' }
  else { typeChar = '✖︎' }

  return (
    <div className={ isActive ? 'definition-wrapper active' : 'definition-wrapper'}>
      <div className="def-left">
        <div className="def-img-wrapper">
          <img src={ img } alt={ name }/>
        </div>

        {
          isActive && (
            <div>
              <p className="def-name">{ name }</p>
              <p>{ typeChar } { type } { typeChar }</p>
            </div>
          )
        }
      </div>

      {
        isActive && (
          <div className="def-right">
            <p className="def-text-wrapper">{ def }</p>
          </div>
        )
      }
    </div>
  );
}

export default Definition;
