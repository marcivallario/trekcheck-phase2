function Itinerary({ itinerary }) {
    const { accommodations, destination, flights, job_number, passenger, transportation } = itinerary
    return (
    <div className="itinerary-container">
        <div className="header">
            <h3>{passenger}</h3>
            <h3>Job #{job_number}</h3>
        </div>
        <div className="detail-container">
            <div className="detail flights">
                <h4>Flights</h4>
                <p>Outbound</p>
                <p>Date: {flights.outbound.date}</p>
                <p>Flight: {flights.outbound.airline} #{flights.outbound.flight_number}</p>
                <p>Departure: {flights.outbound.departure.city}, {flights.outbound.departure.state} &#40;{flights.outbound.departure.airport_code}&#41; @ {flights.outbound.departure.time}</p>
                <p>Arrival: {flights.outbound.arrival.city}, {flights.outbound.arrival.state} &#40;{flights.outbound.arrival.airport_code}&#41; @ {flights.outbound.arrival.time}</p>
                <p>Seat: {flights.outbound.seat}</p>
                <p>Airline Confirmation: {flights.outbound.confirmation}</p>
                <p>Airline Phone: {flights.outbound.customer_service_phone}</p>
                <br></br>
                <p>Return</p>
                <p>Date: {flights.return.date}</p>
                <p>Flight: {flights.return.airline} #{flights.return.flight_number}</p>
                <p>Departure: {flights.return.departure.city}, {flights.return.departure.state} &#40;{flights.return.departure.airport_code}&#41; @ {flights.return.departure.time}</p>
                <p>Arrival: {flights.return.arrival.city}, {flights.return.arrival.state} &#40;{flights.return.arrival.airport_code}&#41; @ {flights.return.arrival.time}</p>
                <p>Seat: {flights.return.seat}</p>
                <p>Airline Confirmation: {flights.return.confirmation}</p>
                <p>Airline Phone: {flights.return.customer_service_phone}</p>
            </div>
            <div className="detail transportation">
                <h4>Transportation</h4>
                <p>Outbound</p>
                <p>To {flights.outbound.departure.airport_code}: {transportation.outbound.to_airport.method}</p>
                <p>{transportation.outbound.to_airport.notes}</p>
                <p>From {flights.outbound.arrival.airport_code}: {transportation.outbound.from_airport.method}</p>
                <p>{transportation.outbound.from_airport.notes}</p>
                <br></br>
                <p>Return</p>
                <p>To {flights.return.departure.airport_code}: {transportation.return.to_airport.method}</p>
                <p>{transportation.return.to_airport.notes}</p>
                <p>From {flights.return.arrival.airport_code}: {transportation.return.from_airport.method}</p>
                <p>{transportation.return.from_airport.notes}</p>
            </div>
            <div className="detail accommodations">
                <h4>Accommodation</h4>
                <p>{accommodations.hotel}</p>
                <p>{accommodations.address1}</p>
                <p>{accommodations.address2}</p>
                <p>{accommodations.city}, {accommodations.state} {accommodations.zip}</p>
                <p>Phone: {accommodations.phone}</p>
                <br></br>
                <p>Confirmation: {accommodations.confirmation}</p>
                <p>Check-in: {accommodations.checkin.date} @ {accommodations.checkin.time}</p>
                <p>Check-out: {accommodations.checkout.date} @ {accommodations.checkout.time}</p>
        
            </div>
        </div>
        <div className="weather">Current weather in {destination.city}, {destination.state}:</div>
    </div>
    )
}
export default Itinerary;