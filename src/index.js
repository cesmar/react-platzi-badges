// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

//Agregar imports de React y ReactDOM

// const jsx = <h1>Hello, Platzi Badges from React!</h1>;

// const element = React.createElement(
//     'a',
//     { href: 'https://platzi.com' },
//     'Ir a Platzi'
// );

// const name = 'Carlos';
// // const element = React.createElement('h1', {}, `Hola, son ${name}`);

// const sum = () => 3 + 3;
// // const element = React.createElement('h1', {}, `Esta es una suma: ${sum()}`);
// const jsx = <h1>Hola, soy {sum()}</h1>

// const jsx = (
//     <div>
//         <h1>Hola, soy {name}</h1>
//         <p>Soy ingeniero frontend.</p>
//     </div>
// );

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, `Hola, soy ${name}`),
//     React.createElement('p', {}, 'Soy ingeniero de la web.')
// );

// const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);
// ReactDOM.render(jsx, container);


import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

// // import Badge from './components/Badge';
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';
import App from './components/App';

const container = document.getElementById('app');

/*
ReactDOM.render(<Badge 
    firstName="Carlos" 
    lastName="Espino"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon" 
    jobTitle="MTC Developer"
    twitter="cesmar_7"
    />, container);
*/
ReactDOM.render(<App />,container);