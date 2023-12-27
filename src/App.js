import logo from './logo.svg';
import './App.css';
import MovieTickets from './component/moview-tickets';
import { ProductListing } from './component/product-list';

function App() {
  return (
    <div className="App">
      <ProductListing/>
     <MovieTickets/>
    </div>
  );
}

export default App;



// Redux :  it is a predictable state container for javascript application to manage the state globally 


// redux is a third party library 
// react-redux is also third party library which connects the bridging btw react and redux 


// 1. React - redux  ----> to pass or store data in shell/store 
// 2. redux - react  ----> to take the data from shell 


// movie tickets 



// salaar_moviw_pvr ={
//     totalTickets :300,
//     filledTickets: 100,
//     unfilledTickets: 200,
//     ticketOnHold:20
// }




// action : 

// 1.Ticket select (HOLD)
// 2. but tickeys (SUCCESS)
// 3.cancel ticket(FAILURE)


// salaar_moviw_pvr ={
//     totalTickets :300,
//     filledTickets: 105,
//     unfilledTickets: 195,

// }




// 1. Action 
// 2. Reducer 
// 3. store / update in the shell


// redux is a single store 
// to update the data in store user must perform an action 






// action : it is an object which decides the type of action performed by the user 

// action creater : it is an function which returns the action 


// reducer : it is pure function which manipulates the state in store 


// store : container for holding all  data in the application 




















