import '../game.css'
import { Content } from './content'
import { Header } from './header'
import { LeftSidebar } from './LeftSidebar'

export function Game({
    content,
    showProfile,
    showGear,
    showPlay,
    showClans,
    showEvents,
    showMessages,
    showSettings,
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
    id,

}){
    localStorage.setItem("level", 0);
    return (
        <>
        <div className="background"></div>
    <div id="app" onClick={() => forbiddenUsingTwoPerks()}>
        <div className="container">
            <Header showProfile={showProfile} id={id} />
            <LeftSidebar
            showGear={showGear}
            showPlay={showPlay}
            showClans={showClans}
            showEvents={showEvents}
            showMessages={showMessages}
            showSettings={showSettings}
            setIsShop={setIsShop}
            />
            <Content
            content={content}
            profileContent={profileContent}
            gearContent={gearContent}
            playContent={playContent} 
            clansContent={clansContent}
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
            note={note}
            notes={notes}
            creditsText={creditsText}
            eventsContent={eventsContent}
            messagesContent={messagesContent}
            settingsContent={settingsContent}
            isShop={isShop}
            setIsShop={setIsShop}
            gameplay={gameplay}
            setGameplay={setGameplay}
            />
                </div>
        </div>
    </>
    )
}