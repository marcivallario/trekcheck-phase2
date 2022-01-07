import Itinerary from "./Itinerary";

function ItineraryList({ itineraries, onDelete }) {
    return (
        <div id="itinerary-list">
            {itineraries.map(itinerary => <Itinerary key={itinerary.id} itinerary={itinerary} onDelete={onDelete}/>)}
        </div>
    )
}

export default ItineraryList;