function Itinerary({ itinerary, onDelete }) {
    function handleDelete() {
        fetch(`http://localhost:3004/reservations/${itinerary.id}`, {
            method: 'DELETE'
            })
        .then(onDelete(itinerary.id));
    }
    
    return (
    <div className="itinerary-container">
        <div className="header">
            <h3>{itinerary.passenger}</h3>
            <h3>Job #{itinerary.job_number}</h3>
        </div>
        <div className="detail-container">
            <div className="detail flights">
                <h4>Flights</h4>
                <p className="card-subheader">Outbound</p>
                <ul>
                    <li>
                        <p className="card-label">Date: </p>
                        <p>{itinerary.flight_outbound_date}</p>
                    </li>
                    <li>
                        <p className="card-label">Flight: </p>
                        <p>{itinerary.flight_outbound_num}</p>
                    </li>
                    <li>
                        <p className="card-label">Departure: </p>
                        <p>{itinerary.flight_outbound_dep_city} &#40;{itinerary.flight_outbound_dep_code}&#41; @ {itinerary.flight_outbound_dep_time}</p>
                    </li>
                    <li>
                        <p className="card-label">Arrival: </p>
                        <p>{itinerary.flight_outbound_arr_city} &#40;{itinerary.flight_outbound_arr_code}&#41; @ {itinerary.flight_outbound_arr_time}</p>
                    </li>
                    <li>
                        <p className="card-label">Seat: </p>
                        <p>{itinerary.flight_outbound_seat}</p>
                    </li>
                    <li>
                        <p className="card-label">Airline Confirmation: </p>
                        <p>{itinerary.flight_outbound_conf}</p>
                    </li>
                    <li>
                        <p className="card-label">Airline Phone: </p>
                        <p>{itinerary.flight_outbound_custphone}</p>
                    </li>
                </ul>
                <br></br>
                <p className="card-subheader">Return</p>
                <ul>
                    <li>
                        <p className="card-label">Date: </p>
                        <p>{itinerary.flight_return_date}</p>
                    </li>
                    <li>
                        <p className="card-label">Flight: </p>
                        <p>{itinerary.flight_return_num}</p>
                    </li>
                    <li>
                        <p className="card-label">Departure: </p>
                        <p>{itinerary.flight_return_dep_city} &#40;{itinerary.flight_return_dep_code}&#41; @ {itinerary.flight_return_dep_time}</p>
                    </li>
                    <li>
                        <p className="card-label">Arrival: </p>
                        <p>{itinerary.flight_return_arr_city}&#40;{itinerary.flight_return_arr_code}&#41; @ {itinerary.flight_return_arr_time}</p>
                    </li>
                    <li>
                        <p className="card-label">Seat: </p>
                        <p>{itinerary.flight_return_seat}</p>
                    </li>
                    <li>
                        <p className="card-label">Airline Confirmation: </p>
                        <p>{itinerary.flight_return_conf}</p>
                    </li>
                    <li>
                        <p className="card-label">Airline Phone: </p>
                        <p>{itinerary.flight_return_custphone}</p>
                    </li>
                </ul>
            </div>
            <div className="detail transportation">
                <h4>Transportation</h4>
                <p className="card-subheader">Outbound</p>
                <ul>
                    <li>
                        <p className="card-label">To {itinerary.flight_outbound_dep_code}: </p>
                        <p>{itinerary.transportation_outbound_toair_method}</p>
                    </li>
                    <li>
                        <p className="card-label">From {itinerary.flight_outbound_arr_code}: </p>
                        <p>{itinerary.transportation_outbound_fromair_method}</p>
                    </li>
                </ul>
                <br></br>
                <p className="card-subheader">Return</p>
                <ul>
                    <li>
                        <p className="card-label">To {itinerary.flight_return_dep_code}: </p>
                        <p>{itinerary.transportation_return_toair_method}</p>
                    </li>
                    <li>
                        <p className="card-label">From {itinerary.flight_return_arr_code}: </p>
                        <p>{itinerary.transportation_return_fromair_method}</p>
                    </li>
                </ul>
                <p></p>
                <p></p>
            </div>
            <div className="detail accommodations">
                <h4>Accommodation</h4>
                <ul>
                    <li>
                        <p className="card-label">Hotel: </p>
                        <div>
                            <p>{itinerary.accommodations_hotel}</p>
                            <p>{itinerary.accommodations_address}</p>
                            <p>{itinerary.accommodations_city}, {itinerary.accommodations_state} {itinerary.accommodations_zip}</p>
                        </div>
                    </li>
                    <li>
                        <p className="card-label">Phone: </p>
                        <p>{itinerary.accommodations_phone}</p>
                    </li>
                    <li>
                        <p className="card-label">Confirmation: </p>
                        <p>{itinerary.accommodations_confirmation}</p>
                    </li>
                    <li>
                        <p className="card-label">Check-in: </p>
                        <p>{itinerary.accommodations_checkin}</p>
                    </li>
                    <li>
                        <p className="card-label">Check-out: </p>
                        <p>{itinerary.accommodations_checkout}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="weather">Current weather in {itinerary.flight_outbound_arr_city}:</div>
        <div className="delete" onClick={handleDelete}>X</div>
    </div>
    )
}
export default Itinerary;