import '../game.css'

export function Credits({ credits }){
    return (
        <>
            <div className="credits" ref={credits}>
                <div className="credits_container">
                    <div className="credits_header_text">
                        Game Developing
                    </div>
                    <div className="credits_section_text_container">
                        <div className="credits_section_text">Developed By Abdo Super</div>
                    </div>
                    <div className="credits_header_text">
                        Photos
                    </div>
                    <div className="credits_section_text_container">
                        <div className="credits_section_text">Background By Karim</div>
                        <div className="credits_section_text">Weapons By Karim</div>
                        <div className="credits_section_text">Weapons By Abdo Super</div>
                        <div className="credits_section_text">Photos By flaticon from <a href="https://flaticon.com" target="_blank">https://flaticon.com</a></div>
                    </div>
                    <div className="credits_header_text">
                        Featured Creators
                    </div>
                    <div className="credits_section_text_container">
                        <div className="credits_section_text"><span>#1</span> - <a href="https://www.youtube.com/@dzkarim1" target="_blank">Karim</a></div>
                    </div>
                </div>
                <div className="close">
                    <img src="src/assets/X.png" className="close_img" onClick={() => credits.current.style.display = 'none'} />
                </div>
            </div>
        </>
    )
}