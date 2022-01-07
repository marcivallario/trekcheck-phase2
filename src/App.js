import Banner from "./components/Banner"
import Header from "./components/Header";
import ItineraryList from "./components/ItineraryList";
import AddItineraryForm from "./components/AddItineraryForm";
import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";

function App() {
const [ itineraries, setItineraries ] = useState([]);
// const [ visibleItineraries, setVisibleItineraries ] = useState(itineraries);
  
  useEffect(() => {
    fetch(`http://localhost:3004/reservations`)
    .then(resp => resp.json())
    .then(data => {
      setItineraries(data)
    })
  }, [])

  function onAdd(newItinerary) {
    setItineraries([...itineraries, newItinerary])
  }

  function onDelete(itineraryToDeleteId) {
    setItineraries(itineraries.filter(itinerary => itinerary.id !== itineraryToDeleteId));
  }

  // function filterItineraries(e) {
  //   let today= new Date();
  //   setVisibleItineraries(() => itineraries.filter(itinerary => {
  //     if (e.target.textContent === "Upcoming Reservations") {
  //       return Date.parse(itinerary.flight_outbound_date) > Date.parse(today)
  //     } 
  //     else if (e.target.textContent === "Archive") {
  //       return Date.parse(itinerary.flight_outbound_date) < Date.parse(today)
  //     }
  //     else {
  //       return true;
  //     }
  //   }))

  // }
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/add">
          <AddItineraryForm onAdd={onAdd}/>
        </Route>
        <Route exact path="/itineraries">
          <ItineraryList itineraries={itineraries} onDelete={onDelete}/>
        </Route>
        <Route exact path="/">
          <Banner/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
