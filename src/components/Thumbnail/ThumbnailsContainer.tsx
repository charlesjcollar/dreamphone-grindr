import React from 'react';

export default function ThumbnailsContainer(props: {
  children: JSX.Element[];
}): JSX.Element {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '7rem' }}>
      {props.children}
    </div>
  );
}
