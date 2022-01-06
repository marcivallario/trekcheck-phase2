import Itinerary from "./Itinerary";

function ItineraryList({ itineraries }) {
    return (
        <div id="itinerary-list">
            {itineraries.map(itinerary => <Itinerary key={itinerary.id} itinerary={itinerary} />)}
        </div>
    )
}

export default ItineraryList;