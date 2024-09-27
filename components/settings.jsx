import { useState } from 'react';
import '../game.css'
import { useRef } from 'react';


export function Settings({ settingsContent }) {

    const [selectKey, setSelectKey] = useState(false);

    if (!localStorage.getItem("settings")) {
        const settings = [
            {
                keybindings: [
                    {
                        name: 'Move Up',
                        key: 'Arrow Up',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Move Down',
                        key: 'Arrow Down',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Move Left',
                        key: 'Arrow Left',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Move Right',
                        key: 'Arrow Right',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Weapon 1',
                        key: '1',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Weapon 2',
                        key: '2',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Weapon 3',
                        key: '3',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Weapon 4',
                        key: '4',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Weapon 5',
                        key: '5',
                        id: crypto.randomUUID(),
                    },
                    {
                        name: 'Special',
                        key: 'Space',
                        id: crypto.randomUUID(),
                    },
                ],
                sound: 50,
            }
        ]
        localStorage.setItem("settings", JSON.stringify(settings));
    }
    
    const keybindings = JSON.parse(localStorage.getItem("settings"))[0].keybindings


    function changeKeybinding(id, index){
        if (!selectKey) {
            document.getElementsByClassName("keybinding-key")[index].innerHTML = '<span>Select A Key</span>'
            setSelectKey(true);
            document.addEventListener("keyup", function evl(e) {
                if (e.code === 'Space') return;
                e.preventDefault();
                document.getElementsByClassName("keybinding-key")[index].innerHTML = e.key ;
                const newKey = [{ keybindings: keybindings, sound: Number(document.getElementById('sound-range').value) }]
                newKey[0].keybindings[index].key = e.key;
                console.log(newKey[0].keybindings[index].key);
                localStorage.setItem("settings", JSON.stringify(newKey));
                console.log(JSON.parse(localStorage.getItem("settings")));
                setSelectKey(false);
                document.removeEventListener("keyup", evl);
            })
        }
    }
    return (
        <>
            <div className="settings_content item_content" ref={settingsContent}>
                <div className="settings_content_title item_content_title">
                    <div className="settings_content_title_text item_content_title_text">
                        SETTINGS
                    </div>
                </div>
                <div className="settings-container">
                    <div className="settings">
                        <div className="container">
                            <div className="sound-title settings-header">
                                Sound
                            </div>
                            <div className="sound-range-container">
                                <input defaultValue={JSON.parse(localStorage.getItem("settings"))[0].sound} onChange={() => localStorage.setItem("settings", JSON.stringify([{ keybindings: keybindings, sound: Number(document.getElementById('sound-range').value) }]))} type="range" id='sound-range' className="sound-range" />
                                <label htmlFor="sound-range">&#128266;</label>
                            </div>
                            <div className="keybindings-title settings-header">
                                Key Bindings
                            </div>
                            <div className="keybindings">
                                <div className="keyb-warning">
                                    <span className="wrnng">Warning:</span> Do <strong>NOT</strong> Use Space In Keybindings!
                                </div>
                                {keybindings.map((keybinding, index) => (
                                    <div className="keybinding" key={keybinding.id}>
                                        <button className="keybinding-name" onClick={() => changeKeybinding(keybinding.id, index)}>
                                            {keybinding.name}
                                        </button>
                                        <div className="keybinding-key">
                                            {keybinding.key}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}