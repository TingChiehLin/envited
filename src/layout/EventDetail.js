import {useParams} from "react-router-dom";

const EventDetail = () => {

    let { eventId } = useParams();

    return (
        <div>
            {eventId}
        </div>
    )
}

export default EventDetail
