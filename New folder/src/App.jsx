import React, {useState} from 'react'

import './App.css'


function App () {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Wotermelon"
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) => 
      item.toLowerCase().indexOff(event.target.value.toLowerCase()) !==-1
      );
      setFilterList(filteredValues);      
  };
  return (
    <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch}/>
      </div>
      {filterList &&
      filterList.map((item, index)  => (
        <div key={index}>{item}</div> // Display each item
      ))}
    </div>
  );
}


export default App;
