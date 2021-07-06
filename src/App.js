import React from 'react';
import './App.css';
import jsondata from './data.json'
import FilterableProductTable from './components/FilterableProductTable';


function App() {
  return (
      <div className="App">
    <FilterableProductTable products={ jsondata.data } console.log(products)/>
    
    
        
    </div>
  );
}

export default App;
