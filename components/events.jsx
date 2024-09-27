import { useState } from 'react'
import '../game.css'

export function Events({ eventsContent }) {

    const [events, setEvents] = useState([/*{ title: 'The Gems', image: 'src/assets/gems icon.png', time: '00:30:00' }*/]);

    return (
        <>
            <div className="events_content item_content" ref={eventsContent}>
                <div className="events_content_title item_content_title">
                    <div className="events_content_title_text item_content_title_text">
                        EVENTS
                    </div>
                </div>
                <div className="events-container">
                    <div className="events">
                        {events.map(event => (
                            <div className="event">
                            <div className="event-title">
                                {event.title}
                            </div>
                            <div className="event-image">
                                <img src={event.image} alt="Event Image" draggable={false} />
                            </div>
                            <div className="event-time">
                                Starts After:
                                <br />
                                {event.time}
                            </div>
                        </div>
                        ))}
                        {events.length === 0 ? <h1 style={{color: '#fff', fontFamily: "system-ui"}}>No Events Now</h1> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}
