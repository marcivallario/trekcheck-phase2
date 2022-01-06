function Itinerary({ itinerary }) {
    return (
    <div className="itinerary-container">
        <div className="header">
            <h3>{itinerary.passenger}</h3>
            <h3>Job #{itinerary.job_number}</h3>
        </div>
        <div className="detail-container">
            <div className="detail flights">
                <h4>Flights</h4>
                <p>Outbound</p>
                <p>Date: {itinerary.flight_outbound_date}</p>
                <p>Flight: {itinerary.flight_outbound_num}</p>
                <p>Departure: {itinerary.flight_outbound_dep_city} &#40;{itinerary.flight_outbound_dep_code}&#41; @ {itinerary.flight_outbound_dep_time}</p>
                <p>Arrival: {itinerary.flight_outbound_arr_city} &#40;{itinerary.flight_outbound_arr_code}&#41; @ {itinerary.flight_outbound_arr_time}</p>
                <p>Seat: {itinerary.flight_outbound_seat}</p>
                <p>Airline Confirmation: {itinerary.flight_outbound_conf}</p>
                <p>Airline Phone: {itinerary.flight_outbound_custphone}</p>
                <br></br>
                <p>Return</p>
                <p>Date: {itinerary.flight_return_date}</p>
                <p>Flight: {itinerary.flight_return_num}</p>
                <p>Departure: {itinerary.flight_return_dep_city} &#40;{itinerary.flight_return_dep_code}&#41; @ {itinerary.flight_return_dep_time}</p>
                <p>Arrival: {itinerary.flight_return_arr_city}&#40;{itinerary.flight_return_arr_code}&#41; @ {itinerary.flight_return_arr_time}</p>
                <p>Seat: {itinerary.flight_return_arr_seat}</p>
                <p>Airline Confirmation: {itinerary.flight_return_conf}</p>
                <p>Airline Phone: {itinerary.flight_return_custphone}</p>
            </div>
            <div className="detail transportation">
                <h4>Transportation</h4>
                <p>Outbound</p>
                <p>To {itinerary.flight_outbound_dep_code}: {itinerary.transportation_outbound_toair_method}</p>
                <p>From {itinerary.flight_outbound_arr_code}: {itinerary.transportation_outbound_fromair_method}</p>
                <br></br>
                <p>Return</p>
                <p>To {itinerary.flight_return_dep_code}: {itinerary.transportation_return_toair_method}</p>
                <p>From {itinerary.flight_return_arr_code}: {itinerary.transportation_return_fromair_method}</p>
            </div>
            <div className="detail accommodations">
                <h4>Accommodation</h4>
                <p>{itinerary.accommodations_hotel}</p>
                <p>{itinerary.accommodations_address}</p>
                <p>{itinerary.accommodations_city}, {itinerary.accommodations_state} {itinerary.accommodations_zip}</p>
                <p>Phone: {itinerary.accommodations_phone}</p>
                <br></br>
                <p>Confirmation: {itinerary.accommodations_confirmation}</p>
                <p>Check-in: {itinerary.accommodations_checkin}</p>
                <p>Check-out: {itinerary.accommodations_checkout}</p>
            </div>
        </div>
        <div className="weather">Current weather in {itinerary.flight_outbound_arr_city}:</div>
    </div>
    )
}
export default Itinerary;