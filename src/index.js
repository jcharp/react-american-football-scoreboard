import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


 const App = () => {

    let [count, setCount] = useState(0);

return (
    <div>
           <div className = "counter">
            <h1>Lions</h1>
            <p className ='click_desc'>
                This is the currnt score <span>{count}</span>
            </p>
            <div className="button_container">
                <button
                onClick = {() => {
                    setCount(count +3);

            }}
            >

            field goal
            </button>
            <button
                onClick = { () => {
                    setCount(count + 7)

                } }
                >
                    Touch Down
                </button>
            </div>


        </div>
  
        <div className = "counter">
            <h1>Tigers</h1>
            <p className ='click_desc'>
                This is the currnt score <span>{count}</span>
            </p>
            <div className="button_container">
                <button
                onClick = {() => {
                    setCount(count +3);

            }}
            >

            field goal
            </button>
            <button
                onClick = { () => {
                    setCount(count + 7)

                } }
                >
                    Touch Down
                </button>
            </div>


        </div>
            



    </div>
       
    
)

}






ReactDOM.render(<App />, document.getElementById('root'));
