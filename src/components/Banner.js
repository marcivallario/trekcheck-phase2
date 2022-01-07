import {Route} from 'react-router-dom'

function Banner({ filterItineraries }) {
    return (
        <div id="banner">
            <div id="header">
                <h1>All your trips, <br/> at your fingertips.</h1>
                <p>Their journies begin and end with you, so your peace of mind is our business.</p>
                <Route render={({ history }) => (
                    <button onClick={() => { history.push('/add') }}>Add Itinerary</button>
                )} />
            </div>
            <div id="buttons">
                <button className="sort-button" id="all" onClick={filterItineraries}>All <br/>Reservations</button>
                <button className="sort-button" id="upcoming" onClick={filterItineraries}>Upcoming Reservations</button>
                <button className="sort-button" id="archive" onClick={filterItineraries}>Archive</button>
            </div>
        </div>
    )
}

export default Banner;