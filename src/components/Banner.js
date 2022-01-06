import {Route} from 'react-router-dom'

function Banner() {
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
                <div className="sort-button" id="upcoming"><p>Upcoming Reservations</p></div>
                <div className="sort-button" id="archive"><p>Archive</p></div>
            </div>
        </div>
    )
}

export default Banner;