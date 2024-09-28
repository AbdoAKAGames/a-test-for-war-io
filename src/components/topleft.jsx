import { useState, useRef } from 'react'
import '../game.css'
import { supabase } from '../App';
import { useEffect } from 'react';

export function TopLeft({ showProfile, id }){
    const [editName, setEditName] = useState(false);
    const [ne, setNe] = useState(true);
    const [name, setName] = useState('');
    const newNameRef = useRef(null);

    let interval;
    let timeout;


    function animate() {
        clearInterval(interval);
        clearTimeout(timeout);
        const notes = document.getElementsByClassName('ne-note');
        if (notes) 
        for (let i = 0; i < notes.length; i++) {
            notes[i].style.display = 'flex';
            let op = 0;
            interval = setInterval(() => {
                op += 0.05;
                notes[i].style.opacity = op;
                if (op >= 1) {
                    clearInterval(interval);
                }
            }, 30);
            timeout = setTimeout(() => {
                let op = 1;
                interval = setInterval(() => {
                    op -= 0.05;
                    notes[i].style.opacity = op;
                    if (op <= 0) {
                        clearInterval(interval);
                    }
                }, 30);
            }, 2000);
        }
    }


    function edit() {
        const newName = newNameRef.current.value;
        if (data[0].currecy.gems >= 50 && (newName.length > 0 && !newName.startsWith(' '))) {
            data[0].currecy.gems -= 50;
            sessionStorage.setItem("data", JSON.stringify(data))
            localStorage.setItem("name", newName);
            setEditName(false);
            document.getElementsByClassName("gems_currency_count")[0].innerHTML = data[0].currecy.gems
            setNe(true);
            animate();
        }
    }


    useEffect(() => {
        getName();
    })

    async function getName() {
        const { data } = await supabase.from("user_info").select().eq('id', id);
        if (data[0] != null) setName(data[0].name); else setName('failed... please reload')
    }

    return (
        <>
        <div className="top_left">
                <div className="profile_guest" onClick={() => showProfile()}>
                    <div className="profile_guest_img_container">
                        <img className="profile_guest_img" src="https://github.com/AbdoAKAGames/Vite-Test/blob/master/src/assets/profile.png?raw=true" draggable="false" />
                    </div>
                </div>
                <div className="name_level_container">
                    <div className="name_container">
                        <div className="name_text_container">
                            <div className="name_text">
                                NAME: <div className="myname">{name ? name : "Loading..."}<button className="edit-name" onClick={() => setEditName(true)}>Edit</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="level_container">
                        <div className="level_text_container">
                            <div className="level_text">
                                LV.<div className="mylevel">{localStorage.getItem("level")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {editName && <div className="edit-name-modal">
                <div className="close" onClick={() => setEditName(false)}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="edit-name-title">
                    Edit Your Name
                </div>
                <div className="edit-name-container">
                    <div className="edit-name-form">
                        <input type="text" className="new-name-input" maxLength={15} placeholder="New username..." ref={newNameRef} />
                        <button className="create-new-name" onClick={() => edit()}>Edit <span style={{color: 'transparent'}}>x</span> <samp style={{fontSize: '20px'}}>50<img src="src/assets/gems icon.png" width={20} height={20} /></samp></button>
                    </div>
                {
                ne && <div className="ne-note">
                    You Don't Have Enough Gems
                </div>
                }
                </div>
            </div>
            }
        </>
    )
}
