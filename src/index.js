import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';



// function luckyNumber() {
//    return Math.floor(Math.random() * 1001)
//     }
//
//
// function greeting(user) {
//
//         return (
//             <div className="container">
//                 <h1>Welcome {user.name}</h1>
//                 <h2 className="text-muted">Your lucky number is {user.luckynumber}</h2>
//             </div>
//         )
//     }
//
// const user = {
//     name: 'EJ',
//     luckynumber: luckyNumber()
// }

    ReactDOM.render(
        <App/>,
    document.getElementById('root')
        )


