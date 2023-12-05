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

  const Greeting = ({ name }) => {
    return React.createElement('h1', {
      children: [
        'Hello',
        React.createElement('span', { children: name }),
        '. Welcome!',
      ]
    })
  }

  console.log(elemnt);

  return React.createElement(Greeting, {
    name: 'Viktor',
  });
}
 