import { useRef } from 'react'
import '../game.css'
import { Clans } from './clans'
import { Credits } from './credits'
import { Gear } from './gear'
import { Play } from './play'
import { Profile } from './profile'
import { Events } from './events'
import { Messages } from './messages'
import { Settings } from './settings'

export function Content({
    content,
    profileContent,
    gearContent,
    playContent,
    clansContent,
    eventsContent,
    messagesContent,
    settingsContent,
    melee,
    pistol,
    main,
    explosives,
    packs,
    saveGear,
    skins,
    bodies,
    hands,
    emojis,
    perks,
    forbiddenUsingTwoPerks,
    note,
    notes,
    creditsText,
    isShop,
    setIsShop,
    gameplay,
    setGameplay,
}){
    const credits = useRef(null);
    return (
        <>
        <div className="content" ref={content}>
                <div className="content_container">
                    <div className="inner">
                        <Gear gearContent={gearContent}
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        saveGear={saveGear}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        perks={perks}
                        forbiddenUsingTwoPerks={forbiddenUsingTwoPerks}
                        />
                        <Profile profileContent={profileContent}
                        note={note}
                        notes={notes}
                        />
                        <Play playContent={playContent}
                        creditsText={creditsText}
                        credits={credits}
                        isShop={isShop}
                        setIsShop={setIsShop}
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        gameplay={gameplay}
                        setGameplay={setGameplay}
                        />
                        <Clans clansContent={clansContent} />
                        <Events eventsContent={eventsContent} />
                        <Messages messagesContent={messagesContent} />
                        <Settings settingsContent={settingsContent} />
                        {/* <div className="credits_text_container">
                            <div className="credits_text">
                                <span>CREDITS</span>
                            </div>
                        </div> */}
                    </div>
                        </div>
                        <Credits credits={credits} />
                        <div className="notes" id='notes' ref={notes}>
                            <div className="notes_container">
                                <div className="note" id='note' ref={note}>
                                    Code Copied
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}