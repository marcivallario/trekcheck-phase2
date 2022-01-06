import Banner from "./components/Banner"
import Header from "./components/Header";
import ItineraryList from "./components/ItineraryList";
import AddItineraryForm from "./components/AddItineraryForm";
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

function App() {
const [ itineraries, setItineraries ] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3004/reservations`)
    .then(resp => resp.json())
    .then(data => setItineraries(data))
  }, [])

  function onAdd(newItinerary) {
    setItineraries([...itineraries, newItinerary])
  }
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/add">
          <AddItineraryForm onAdd={onAdd}/>
        </Route>
        <Route exact path="/itineraries">
          <ItineraryList itineraries={itineraries}/>
        </Route>
        <Route exact path="/">
          <Banner />
          <ItineraryList itineraries={itineraries}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
