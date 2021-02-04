import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';
import {add, sub, div, mul } from "./Calc";
import Info from './Info';
import Sinfo from "./Sinfo";
function App() {
  return (
    <>
      <h1>Emoji 😄 ❤️ ✔️</h1>
      <Heading />
      <Paragraph />
      <List />
       
      <ul>
        <li>Sum of Two Number is {add(40, 4)}</li>
        <li>Sub of Two Number is {sub(30, 3)}</li>
        <li>Div of Two Number is {div(10, 3)}</li>
        <li>Mul of Two Number is {mul(10, 3)}</li>
      </ul>
      <Info key={Sinfo[0].id}
            sname={Sinfo[0].sname}
            srno={Sinfo[0].srno}
            sdiv={Sinfo[0].sdiv}
            scity={Sinfo[0].scity}
      />
      <Info key={Sinfo[1].id}
            sname={Sinfo[1].sname}
            srno={Sinfo[1].srno}
            sdiv={Sinfo[1].sdiv}
            scity={Sinfo[1].scity}
      />
  
    </>
  );
}

export default App;
