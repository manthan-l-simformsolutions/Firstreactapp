import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,
  document.getElementById("root")
);


// ReactDOM.render(
//   <Fragment>
//     <h1>Manthan Limbasiya</h1>
//     <p>How are you</p>
//     <h2>I am Fine</h2>
//   </Fragment>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <h1>Manthan Limbasiya</h1>
//     <p>List of 5 best series.</p>
//     <ol>
//       <li>Dark</li>
//       <li>Extra curriculer</li>
//       <li>My Holo Love</li>
//       <li>My First-2 Love</li>
//       <li>Mr Robot</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );

/**
 * Javascript expression in jsx in reactjs

const FLname = "Manthan Limbasiya";
ReactDOM.render(
  <>
  <h1>My name is {FLname}</h1>
  <p>Sum of 5 and 10 is: {5+10}</p>
  <p>Substraction of 5 and 10 is: {5-10}</p>
  <p>Multiplication of 5 and 10 is: {5*10}</p>
  <p>Division of 5 and 10 is: {5/10}</p>
  <p>Modulo of 5 and 10 is: {5%10}</p>
  <h2>Random Number is: {Math.random()}</h2>
  </>,
  document.getElementById('root')
);
*/

/**
 * Template Literals in react js. Use ``
 */
// const fname = "Manthan";
// const lname = "Limbasiya";
// ReactDOM.render(
//   <>
//   {/* <h1>My name is {fname} {lname}</h1>
//   <h1>My name is {fname + " " + lname}</h1> */}
//   <h1>{`My first name is ${fname} and last name is ${lname}`}</h1>
//   </>,
//   document.getElementById('root')
// );


// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1>Manthan Limbasiya</h1>  
//     <p>{`Todays date is: ${currdate}`}</p>
//     <p>{`Current time is: ${currtime}`}</p>
//   </>,
//   document.getElementById('root')
// );


/**
 * JSX Attribute
 */
// const name = "Manthan";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.google.com/"
// ReactDOM.render(
//   <>
//     <h1 contentEditable="true" >My name is {name}</h1>
//     <img src={img1} alt="randomImages" />
//     <img src={img2} alt="randomImages" />
//     <a href={link} target="_blank">
//     <img src={img3} alt="randomImages" />
//     </a>
//   </>,
//   document.getElementById("root")
// );



/**
 * CSS style
 */

// const name = "Manthan";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.google.com/"
// ReactDOM.render(
//   <>
//     <h1 className="heading" >My name is {name}</h1>
//     <div className="img_div">
//       <img src={img1} alt="randomImages" />
//       <img src={img2} alt="randomImages" />
//       <a href={link} target="_blank">
//         <img src={img3} alt="randomImages" />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );



/**
 * Inline CSS
 */
// const name = "Manthan";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.google.com/"

// const heading = {
//   color: 'darkblue',
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: '0px 2px 4px black',
//   margin: '50px 0px',
//   fontFamily: '"Josefin Sans", sans-serif'
// }
// ReactDOM.render(
//   <>
//     <h1 style={heading} >My name is {name}</h1>
//     <div className="img_div">
//       <img src={img1} alt="randomImages" />
//       <img src={img2} alt="randomImages" />
//       <a href={link} target="_blank">
//         <img src={img3} alt="randomImages" />
//       </a>
//     </div>
//   </>,
//   document.getElementById("root")
// );



/**
 * mini project-1
 */
// let ctime = new Date().getHours();
// let greeting = '';
// const cssStyle = {};
// if (ctime >= 1 && ctime <= 12) {
//   greeting = "Good Morning";
//   cssStyle.color = 'green';
// }
// else if (ctime >= 12 && ctime < 19) {
//   greeting = "Good Afternoon";
//   cssStyle.color = 'Orange';
// }
// else {
//   greeting = "Good Night";
//   cssStyle.color = 'Black';
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );


















