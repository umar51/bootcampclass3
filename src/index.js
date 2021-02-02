import React from 'react';
import ReactDOM from 'react-dom';




// //Mediacard component
// function MediaCard (props){
//   return <div>
//     <h2>{props.title}</h2>

//     <p>{props.body}</p>

//     <img src={props.imageUrl} alt="Amazing Scene"></img>
//   </div>
// }

//ReactDOM.render(<MediaCard title="Title is Here" body={<p><b>Body</b> is here</p>} imageUrl="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg"/>, document.querySelector('#root'));


//isOpen component
function Gate(props){
  return <div>{props.isOpen}</div>;

} 
ReactDOM.render(<Gate isOpen={false ? <p>Open</p> : <p>Close</p>}/>, document.querySelector('#root'));