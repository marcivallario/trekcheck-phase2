import { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddItineraryForm({ onAdd }) {
    const [ formData, setFormData ] = useState({
      job_number: "",
      passenger: "",
      flight_outbound_date: "",
      flight_outbound_num: "",
      flight_outbound_dep_city: "",
      flight_outbound_dep_code: "",
      flight_outbound_dep_time: "",
      flight_outbound_arr_city: "",
      flight_outbound_arr_code: "",
      flight_outbound_arr_time: "",
      flight_outbound_seat: "",
      flight_outbound_conf: "",
      flight_outbound_custphone: "",
      flight_return_date: "",
      flight_return_num: "",
      flight_return_dep_city: "",
      flight_return_dep_code: "",
      flight_return_dep_time: "",
      flight_return_arr_city: "",
      flight_return_arr_code: "",
      flight_return_arr_time: "",
      flight_return_seat: "",
      flight_return_conf: "",
      flight_return_custphone: "",
      transportation_outbound_toair_method: "",
      transportation_outbound_fromair_method: "",
      transportation_return_toair_method: "",
      transportation_return_fromair_method: "",
      accommodations_hotel: "",
      accommodations_address: "",
      accommodations_city: "",
      accommodations_state: "",
      accommodations_zip: "",
      accommodations_phone: "",
      accommodations_confirmation: "",
      accommodations_checkin: "",
      accommodations_checkout: ""
    })
    const history = useHistory();

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3004/reservations', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            onAdd(data)
            history.push("/itineraries")
        })
        setFormData({
            job_number: "",
            passenger: "",
            flight_outbound_date: "",
            flight_outbound_num: "",
            flight_outbound_dep_city: "",
            flight_outbound_dep_code: "",
            flight_outbound_dep_time: "",
            flight_outbound_arr_city: "",
            flight_outbound_arr_code: "",
            flight_outbound_arr_time: "",
            flight_outbound_seat: "",
            flight_outbound_conf: "",
            flight_outbound_custphone: "",
            flight_return_date: "",
            flight_return_num: "",
            flight_return_dep_city: "",
            flight_return_dep_code: "",
            flight_return_dep_time: "",
            flight_return_arr_city: "",
            flight_return_arr_code: "",
            flight_return_arr_time: "",
            flight_return_seat: "",
            flight_return_conf: "",
            flight_return_custphone: "",
            transportation_outbound_toair_method: "",
            transportation_outbound_fromair_method: "",
            transportation_return_toair_method: "",
            transportation_return_fromair_method: "",
            accommodations_hotel: "",
            accommodations_address: "",
            accommodations_city: "",
            accommodations_state: "",
            accommodations_zip: "",
            accommodations_phone: "",
            accommodations_confirmation: "",
            accommodations_checkin: "",
            accommodations_checkout: ""
        });
    }

    return (
        <div id="add-form-container">
            <form id="add-form" onSubmit={handleSubmit}>
                <h1>Add New Itinerary</h1>
                <div id="job_info" className="add-container">
                    <input placeholder="Job #" value={formData.job_number} name="job_number" onChange={handleChange}></input>
                    <input placeholder="Passenger Name" value={formData.passenger} name="passenger" onChange={handleChange}></input>
                </div>
                <div id="flights-container" className="add-container">
                    <h5>Flight Info</h5>
                    <div id="flights-info">
                        <div id="outbound-flight">
                            <h6>Outbound</h6>
                            <input placeholder="Date (mm/dd/yyyy)" value={formData.flight_outbound_date} name="flight_outbound_date" onChange={handleChange}></input>
                            <input placeholder="Airline &#38; Flight #" value={formData.flight_outbound_num} name="flight_outbound_num" onChange={handleChange}></input>
                            <input placeholder="Seat Assignment" value={formData.flight_outbound_seat} name="flight_outbound_seat" onChange={handleChange}></input>
                            <input placeholder="Confirmation #" value={formData.flight_outbound_conf} name="flight_outbound_conf" onChange={handleChange}></input>
                            <input placeholder="Airline Phone" value={formData.flight_outbound_custphone} name="flight_outbound_custphone" onChange={handleChange}></input>
                            <label>Departure:</label>
                            <input placeholder="City &#38; State" value={formData.flight_outbound_dep_city} name="flight_outbound_dep_city" onChange={handleChange}></input>
                            <input placeholder="Airport Code" value={formData.flight_outbound_dep_code} name="flight_outbound_dep_code" onChange={handleChange}></input>
                            <input placeholder="Departure Time" value={formData.flight_outbound_dep_time} name="flight_outbound_dep_time" onChange={handleChange}></input>
                            <label>Arrival:</label>
                            <input placeholder="City &#38; State" value={formData.flight_outbound_arr_city} name="flight_outbound_arr_city" onChange={handleChange}></input>
                            <input placeholder="Airport Code" value={formData.flight_outbound_arr_code} name="flight_outbound_arr_code" onChange={handleChange}></input>
                            <input placeholder="Departure Time" value={formData.flight_outbound_arr_time} name="flight_outbound_arr_time" onChange={handleChange}></input>
                        </div>
                        <div id="return-flight">
                            <h6>Return</h6>
                            <input placeholder="Date (mm/dd/yyyy)" value={formData.flight_return_date} name="flight_return_date" onChange={handleChange}></input>
                            <input placeholder="Airline &#38; Flight #" value={formData.flight_return_num} name="flight_return_num" onChange={handleChange}></input>
                            <input placeholder="Seat Assignment" value={formData.flight_return_seat} name="flight_return_seat" onChange={handleChange}></input>
                            <input placeholder="Confirmation #" value={formData.flight_return_conf} name="flight_return_conf" onChange={handleChange}></input>
                            <input placeholder="Airline Phone" value={formData.flight_return_custphone} name="flight_return_custphone" onChange={handleChange}></input>
                            <label>Departure:</label>
                            <input placeholder="City &#38; State" value={formData.flight_return_dep_city} name="flight_return_dep_city" onChange={handleChange}></input>
                            <input placeholder="Airport Code" value={formData.flight_return_dep_code} name="flight_return_dep_code" onChange={handleChange}></input>
                            <input placeholder="Departure Time" value={formData.flight_return_dep_time} name="flight_return_dep_time" onChange={handleChange}></input>
                            <label>Arrival:</label>
                            <input placeholder="City &#38; State" value={formData.flight_return_arr_city} name="flight_return_arr_city" onChange={handleChange}></input>
                            <input placeholder="Airport Code" value={formData.flight_return_arr_code} name="flight_return_arr_code" onChange={handleChange}></input>
                            <input placeholder="Departure Time" value={formData.flight_return_arr_time} name="flight_return_arr_time" onChange={handleChange}></input>
                        </div>
                    </div>
                </div>
                <div id="transporation-container" className="add-container">
                    <h5>Transportation</h5>
                    <div id="transportation-info">
                        <div id="outbound-transpo">
                            <h6>Outbound</h6>
                            <label>To Airport:</label>
                            <input placeholder="Method" value={formData.transportation_outbound_toair_method} name="transportation_outbound_toair_method" onChange={handleChange}></input>
                            <label>From Airport:</label>
                            <input placeholder="Method" value={formData.transportation_outbound_fromair_method} name="transportation_outbound_fromair_method" onChange={handleChange}></input>
                        </div>
                        <div id="return-transpo">
                            <h6>Return</h6>
                            <label>To Airport:</label>
                            <input placeholder="Method" value={formData.transportation_return_toair_method} name="transportation_return_toair_method" onChange={handleChange}></input>                          
                            <label>From Airport:</label>
                            <input placeholder="Method" value={formData.transportation_return_fromair_method} name="transportation_return_fromair_method" onChange={handleChange}></input>
                        </div>
                    </div>
                </div>
                <div id="accommodations-container" className="add-container">
                    <h5>Accommodations</h5>
                    <div id="accommodations-info">
                        <input placeholder="Hotel Name" value={formData.accommodations_hotel} name="accommodations_hotel" onChange={handleChange}></input>
                        <input placeholder="Address" value={formData.accommodations_address} name="accommodations_address" onChange={handleChange}></input>
                        <input placeholder="City" value={formData.accommodations_city} name="accommodations_city" onChange={handleChange}></input>
                        <input placeholder="State" value={formData.accommodations_state} name="accommodations_state" onChange={handleChange}></input>
                        <input placeholder="Zip Code" value={formData.accommodations_zip} name="accommodations_zip" onChange={handleChange}></input>
                        <input placeholder="Phone" value={formData.accommodations_phone} name="accommodations_phone" onChange={handleChange}></input>
                        <input placeholder="Confirmation #" value={formData.accommodations_phone} name="accommodations_phone" onChange={handleChange}></input>
                        <input placeholder="Check-In" value={formData.accommodations_checkin} name="accommodations_checkin" onChange={handleChange}></input>
                        <input placeholder="Check-Out" value={formData.accommodations_checkout} name="accommodations_checkout" onChange={handleChange}></input>
                    </div>
                </div>
                <input type="submit" id="submit" value="Add"></input>
            </form>
        </div>
    )
}

export default AddItineraryForm;