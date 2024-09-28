import { useState } from 'react';
import '../game.css'
import { useRef } from 'react';

export function LeftSidebar({ showGear,
    showPlay,
    showClans,
    showEvents,
    showMessages,
    showSettings,
    isShop,
    setIsShop,
}){


    const gear = useRef(null);
    const play = useRef(null);
    const clans = useRef(null);
    const events = useRef(null);
    const messages = useRef(null);
    const settings = useRef(null);


    function setSelectedSection(selectedSection){
        gear.current.classList.remove('selected_item');
        play.current.classList.remove('selected_item');
        clans.current.classList.remove('selected_item');
        events.current.classList.remove('selected_item');
        messages.current.classList.remove('selected_item');
        settings.current.classList.remove('selected_item');
        
        selectedSection.current.classList.add('selected_item');
    }
    
    return (
        <>
        <div className="left_sidebar">
                <div className="left_sidebar_container">
                    <div className="left_sidebar_gear left_sidebar_item" onClick={() => {showGear();setSelectedSection(gear)}} ref={gear}>
                        <div className="left_sidebar_gear_container left_sidebar_item_container">
                            <div className="left_sidebar_gear_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_gear_image left_sidebar_item_image" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/gear.png?raw=true" draggable="false" />
                            </div>
                            <div className="left_sidebar_gear_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_gear_text left_sidebar_item_text">
                                    GEAR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_play left_sidebar_item" onClick={() => {showPlay();setIsShop(false);setSelectedSection(play)}} ref={play}>
                        <div className="left_sidebar_play_container left_sidebar_item_container">
                            <div className="left_sidebar_play_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_play_image left_sidebar_item_image" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/play.png?raw=true" draggable="false" />
                            </div>
                            <div className="left_sidebar_play_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_play_text left_sidebar_item_text">
                                    PLAY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_clans left_sidebar_item" onClick={() => {showClans();setSelectedSection(clans)}} ref={clans}>
                        <div className="left_sidebar_clans_container left_sidebar_item_container">
                            <div className="left_sidebar_clans_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_clans_image left_sidebar_item_image" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/clans.png?raw=true" draggable="false" />
                            </div>
                            <div className="left_sidebar_clans_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_clans_text left_sidebar_item_text">
                                    CLANS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_events left_sidebar_item" onClick={() => {showEvents();setSelectedSection(events)}} ref={events}>
                        <div className="left_sidebar_events_container left_sidebar_item_container">
                            <div className="left_sidebar_events_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_events_image left_sidebar_item_image" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/events.png?raw=true" draggable="false" />
                            </div>
                            <div className="left_sidebar_events_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_events_text left_sidebar_item_text">
                                    EVENTS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_messages left_sidebar_item" onClick={() => {showMessages();setSelectedSection(messages)}} ref={messages}>
                        <div className="left_sidebar_messages_container left_sidebar_item_container">
                            <div className="left_sidebar_messages_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_messages_image left_sidebar_item_image" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/messages.png?raw=true" draggable="false" />
                                <div className="messages_notifications">
                                    <div className="messages_notifications_container">
                                        <div className="red_circle">
                                            <div className="messages_notifications_number">1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left_sidebar_messages_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_messages_text left_sidebar_item_text">
                                    MESSAGES
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left_sidebar_settings left_sidebar_item" onClick={() => {showSettings();setSelectedSection(settings)}} ref={settings}>
                        <div className="left_sidebar_settings_container left_sidebar_item_container">
                            <div className="left_sidebar_settings_image_container left_sidebar_item_image_container">
                                <img className="left_sidebar_settings_image left_sidebar_item_image" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/settings.png?raw=true" draggable="false" />
                            </div>
                            <div className="left_sidebar_settings_text_container left_sidebar_item_text_container">
                                <div className="left_sidebar_settings_text left_sidebar_item_text">
                                    SETTINGS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
