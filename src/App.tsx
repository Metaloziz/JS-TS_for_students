import React from 'react';
import './App.css';


let anyFunction = (a: boolean) => console.log('a') //  любая функци

let anyObject = [1, 2, 3, 'string', {age:12, name: "Alex" }] // любой объект

let function1 = (anyObject: (number | string | { name: string; age: number })[], anyFunction: (a: boolean) => void) => {

}

function1(anyObject, anyFunction)          // поэтому, сразу вызываем функцию с нужными данными
                                           // при курсоре на аргументах функции нажимаем Alt+Enter
                                           // выбираем "Change function1() signature"
                                           // и у нас готовая типизация








function App() {



    return (<div className="App">x</div>
    );
}

export default App;
