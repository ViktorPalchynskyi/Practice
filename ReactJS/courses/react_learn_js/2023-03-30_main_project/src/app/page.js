'use client';
import React from 'react';

export default function Home() { 
  const elemnt = React.createElement('div', { 
    children: [
      React.createElement('button', { 
        children: 'Click me', 
        onClick: () => console.log('Click')
      }),
      React.createElement('button', { 
        children: 'Click me tooo', 
        onClick: () => console.log('Click too')
      }) 
    ]
  });

  console.log(elemnt);

  return elemnt;
}
 