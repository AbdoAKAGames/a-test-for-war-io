import { useRef, useState } from 'react';
import '../game.css'
import { supabase } from '../App';
import { useEffect } from 'react';

export function Profile({ profileContent, notes, note }){

    const secretInfo = useRef(null);
    const [password, setPassword] = useState(false);
    const [data, setData] = useState({});

    const profile_stats = [
        {
            kills: 452,
            wins: 20,
            deaths: 312,
        },
    ]
    let i = -1;
    for (let j = 0; j < profile_stats.length; j++) {
        i++
    }

    useEffect(() => getId)


    async function getId() {
        const { data } = await supabase.from('user_info').select().eq('id', localStorage.id)
        setData(data[0]);
    }

    let interval;
    let timeout;

    function displayNote(info){
        clearInterval(interval);
        clearTimeout(timeout);
        notes.current.style.display = 'flex';
        let op = 0;
        interval = setInterval(() => {
            op += 0.05;
            notes.current.style.opacity = op;
            if (op >= 1) {
                clearInterval(interval);
            }
        }, 10);
        note.current.textContent = info;
        timeout = setTimeout(() => {
            let op = 1;
            interval = setInterval(() => {
                op -= 0.05;
                notes.current.style.opacity = op;
                if (op <= 0) {
                    clearInterval(interval);
                    note.current.textContent = '';
                    notes.current.style.display = 'none';
                }
            }, 10);
        }, 2000);
    }


    function showSecretInfo(){
        let enc = '';
        for (let i = 0; i < `${data.password}`.length; i++) {
            let x = '*';
            enc = x.repeat(i + 1);
        }
        function copy(storageName){
            navigator.clipboard.writeText(data[storageName]);
        }
        return (
            <>
            <tbody>
            <tr>
           <th>id: </th>
           <td>{data.id} <svg onClick={() => {copy("id");displayNote('your id was copied')}} data-info="id" data-storage="ID" xmlns="http://www.w3.org/2000/svg" className="copy" title="copy id" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg></td>
            </tr>
            <tr>
               <th>email: </th>
               <td>{data.email} <svg onClick={() => {copy("email");displayNote('your email was copied')}} data-info="email" data-storage="email" xmlns="http://www.w3.org/2000/svg" className="copy" title="copy id" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg></td>
            </tr>
            <tr>
               <th>password: </th>
               <td id="password">{!password && enc} {password && data.password} <svg onClick={() => {copy("password");displayNote('your password was copied')}} data-info="password" data-storage="password" xmlns="http://www.w3.org/2000/svg" className="copy" title="copy id" viewBox="0 0 448 512"><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg> <button className="showPassword" onClick={() => setPassword(!password)}>&#128065;</button></td>
            </tr>
            </tbody>
            </>
        )
    }




    return (
        <>
        <div className="profile_content item_content" ref={profileContent}>
                            <div className="profile_content_title item_content_title">
                                <div className="profile_content_title_text item_content_title_text">
                                    PROFILE
                                </div>
                            </div>
                            <div className="profile_content_container">
                                <div className="information">
                                    <div className="information_container">
                                        <table className="profile_table">
                                            <tbody>
                                                <tr>
                                                    <th>season</th>
                                                    <th>kills</th>
                                                    <th>wins</th>
                                                    <th>k/d</th>
                                                </tr>
                                                <tr>
                                                    <td><span>Season {i + 1}:</span></td>
                                                    <td>{profile_stats[i].kills}</td>
                                                    <td>{profile_stats[i].wins}</td>
                                                    <td>{parseFloat(profile_stats[i].kills / profile_stats[i].deaths).toFixed(2)}</td>
                                                </tr>    
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="information_button_container">
                                        <button className="information_button" onClick={() => {secretInfo.current.style.display = 'flex';showSecretInfo()}}>
                                            Your Secret Info
                                        </button>
                                    </div>
                                    <div className="secret_info" ref={secretInfo}>
                                        <div className="secret_info_container">
                                            <div className="info_warning">
                                                <strong>WARNING:</strong> DO NOT SEND YOUR SECRET INFO TO ANYONE!
                                            </div>
                                            <table className="secret_table">
                                                {showSecretInfo()}
                                            </table>
                                            <div className="secret_buttons">
                                                <button className="close_secret_btn" onClick={() => secretInfo.current.style.display = 'none'}>
                                                    CLOSE
                                                </button>
                                                <button className="logout_secret_btn" onClick={() => {localStorage.clear();location.reload();}}>
                                                    LOGOUT
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}