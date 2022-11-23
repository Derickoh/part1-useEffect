import "./styles.css";
import {useState} from "react";

export default function App() {
  const anecdotes = [
    'The best developers put in most of their time coding',
    'Coding should be part of you as a daily obsession',
    'Doing great things bring you great thinks',
    'Trying to improve everyday is the best way to become the best',
    'Bringing in contributions to an organization will lead you places',
  ];

  const [anec, setAnec] = useState(0);
  
  const points = [0, 0, 0, 0, 0];
  // I need to make a copy of this array before updating it
  const copy = [...points];
  
  // create an updater for the values
  const [update, setUdate] = useState(copy);
  // now I need a to creat a function that will update the array on button click
  const updateArr = () => {
     update[anec] += 1;
    setUdate(update);
    console.log(update);
  };
    const maxValue  = Math.max(...update); 
    const valueIndex = update.indexOf(maxValue);
  const maxQuote = () => {
    
    return anecdotes[valueIndex];
  }


  return (
    <div className="App">
      <h1>{anecdotes[anec]}</h1>
       <p>
      {update[anec] === 1
        ? 'has ' + update[anec] + ' vote'
        : 'has ' + update[anec] + ' votes'}
      </p>
      <button onClick={() => setAnec(Math.floor(Math.random() * anecdotes.length))}>display quote</button>
      <button onClick={updateArr}> vote </button>
      <div>
     
      </div> 
      <p>{maxQuote()}</p>
      <p>
        {maxValue === 1
          ? 'has ' + maxValue + ' vote'
          : 'has ' + maxValue + ' votes'}
      </p> 
      
    </div>
  );
}
