import {Route} from 'react-router-dom'

function Banner({ filterItineraries }) {
    return (
        <div id="banner">
            <div id="header">
                <h1>All your trips, <br/> at your fingertips.</h1>
                <p>Their journies begin and end with you, so your peace of mind is our business.</p>
                <Route render={({ history }) => (
                    <button id="add-button" onClick={() => { history.push('/add') }}>Add Itinerary</button>
                )} />
                <Route render={({ history }) => (
                    <button id="view-button" onClick={() => { history.push('/itineraries') }}>View Itineraries</button>
                )} />
            </div>
            <div id="buttons">
                <a href="https://travel.state.gov/content/travel/en/traveladvisories/ea/requirements-for-air-travelers-to-the-us.html" target="_blank"><button className="sort-button">COVID-19 Traveler Information</button></a>
                <a href="https://flightaware.com/" target="_blank"><button className="sort-button">Flight Tracker</button></a>
                <a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/" target="_blank"><button className="sort-button">Travel Alerts</button></a>

                {/* <button className="sort-button" id="all" onClick={filterItineraries}>All <br/>Reservations</button>
                <button className="sort-button" id="upcoming" onClick={filterItineraries}>Upcoming Reservations</button>
                <button className="sort-button" id="archive" onClick={filterItineraries}>Archive</button> */}
            </div>
        </div>
    )
}

export default Banner;