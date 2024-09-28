import { useRef } from 'react';
import '../game.css'
import { useState } from 'react';
import { useCallback } from 'react';
import io from 'socket.io-client';
import { useEffect } from 'react';
const SOCKET_SERVER_URL = 'http://localhost:2000';

export function Clans({ clansContent }){

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(SOCKET_SERVER_URL);

        socketRef.current.on('create-clan', clan => {
            setClans(prevClans => [...prevClans, {id: clan.id, name: clan.name, tag: clan.tag, requiredLevel: clan.reqLevel, members: clan.members}])
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, [])



    let hasclan = false;
    const search = useRef(null);
    const [clans, setClans] = useState([]);
    const createClanNameRef = useRef(null);
    const createClanTagRef = useRef(null);
    const createRequiredLevelTagRef = useRef(null);
    const [createClanModal, setCreateClanModal] = useState(false);
    if (localStorage.getItem("clans")) JSON.parse(localStorage.getItem("clans")).forEach(clan => clan.members.forEach(member => member.id === localStorage.ID ? hasclan = true : hasclan = false));
    const [hasClan, setHasClan] = useState(hasclan);
    const clansArr = localStorage.getItem("clans") ? JSON.parse(localStorage.getItem("clans")) : [];
    const [selectedClan, setSelectedClan] = useState('');
    const [haveClanNote, setHaveClanNote] = useState(false);
    const [isMember, setIsMember] = useState(false);
    
    const clans_list_item_container = document.getElementsByClassName('clans_list_item_container');
    const clan_name = document.getElementsByClassName('clan-name');
    const clan_tag = document.getElementsByClassName('clan-tag');
    function searchClans() {
        const filterText = search.current.value.trim().toLowerCase();
        for (let i = 0; i < clan_tag.length; i++) {
            if (clan_tag[i].textContent.trim().toLowerCase().includes(filterText)
                || clan_name[i].textContent.trim().toLowerCase().includes(filterText)
        )
        clans_list_item_container[i].style.display = 'block';
        else clans_list_item_container[i].style.display = 'none';
    }
}
const createClan = useCallback(() => {
    const clanName = createClanNameRef.current.value;
    const clanTag = createClanTagRef.current.value;
    const clanRequiredLevel = createRequiredLevelTagRef.current.value;
    const clanID = crypto.randomUUID()
    if (clanName.length > 0 && clanTag.length == 3) {
        setClans(prevClans => [...prevClans, {id: clanID, name: clanName, tag: clanTag, requiredLevel: clanRequiredLevel, members: [{name: localStorage.getItem("name"), id: localStorage.getItem('ID')}]}])
        setCreateClanModal(false);
        setHasClan(true);
        clansArr.push({id: clanID, name: clanName, tag: clanTag, requiredLevel: clanRequiredLevel, members: [{name: localStorage.getItem("name"), id: localStorage.getItem('ID')}]});
        localStorage.setItem("clans", JSON.stringify(clansArr));
        socketRef.current.emit('create-clan', {id: clanID, name: clanName, tag: clanTag, reqLevel: clanRequiredLevel, members: [{name: localStorage.getItem("name"), id: localStorage.getItem('ID')}]})
    }
}, [clans, clansArr])


    function joinClan(clanID) {
        if (!hasClan) {
            JSON.parse(localStorage.getItem("clans")).map(clan => {
                if (clan.id === clanID) {
                    clan.members.push({name: localStorage.getItem("name")});
                    setSelectedClan('');
                    setHasClan(true);
                    clansArr.map(_clan => {
                        if (_clan.id === clanID) {
                            _clan.members.push({name: localStorage.getItem("name")});
                            localStorage.setItem("clans", JSON.stringify(clansArr))
                        }
                    })
                }
            })
        } else {
            setHaveClanNote(true);
            setSelectedClan('');
            setTimeout(() => {
                setHaveClanNote(false);
            }, 6000);
        }
    }

    function leaveClan(clanID){
        if (hasClan) {
            JSON.parse(localStorage.getItem("clans")).map(clan => {
                if (clan.id === clanID) {
                    if (clan.members.map(member => member.name === localStorage.getItem("name"))) {
                        clan.members.splice(clan.members.indexOf(clan.members.find(member => member.name === localStorage.getItem("name"))))
                        clansArr.map(_clan => {
                            if (_clan.id === clanID) {
                                if (_clan.members.map(member => member.name === localStorage.getItem("name"))) {
                                    _clan.members.splice(_clan.members.indexOf(_clan.members.find(member => member.name === localStorage.getItem("name"))))
                                    localStorage.setItem("clans", JSON.stringify(clansArr));
                                };
                            }
                        })
                    }
                    setSelectedClan('');
                    setHasClan(false);
                }
            })
        } else {
            setIsMember(true);
            setSelectedClan('');
            setTimeout(() => {
                setIsMember(false);
            }, 6000);
        }
    }

    if (localStorage.getItem("clans")) {
        JSON.parse(localStorage.getItem("clans")).map(clan => {
        console.log(clan.members.length == 0);
        if (clan.members.length == 0) {
            clansArr.splice(clansArr.indexOf(clan), 1);
            localStorage.setItem("clans", JSON.stringify(clansArr));
            setClans(prevClans => [...prevClans]);
        }
    })
          } 

    return (
        <>
        <div className="clans_content item_content" ref={clansContent}>
            <div className="clans_content_title item_content_title">
                <div className="clans_content_title_text item_content_title_text">
                    CLANS
                </div>
            </div>
            <div className="clans_container">
                <div className="clans">
                    <ul className="clans_list">
                        <div className="search_clan">
                            <input type="search" placeholder="Search Clans..." id="search" ref={search} onKeyUp={() => searchClans()} />
                        </div>
                        {!localStorage.getItem("clans") ? clans.map(clan => (
                            <li className="clans_list_item_container" key={clan.id} onClick={() => setSelectedClan(clan.id)}>
                            <div className="clans_list_item">
                                <div className="clan_text">
                                    <div className="right-text">
                                        <div className="clan_tag">
                                            {`[${clan.tag}]`}
                                        </div>
                                        <div className="clan_name">
                                            {clan.name}
                                        </div>
                                        <div className="required-level">
                                            {clan.requiredLevel}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        )) : JSON.parse(localStorage.getItem("clans")).map(clan => (
                            <li className="clans_list_item_container" key={clan.id} onClick={() => setSelectedClan(clan.id)}>
                            <div className="clans_list_item">
                                <div className="clan_text">
                                    <div className="clan_tag det">
                                        <span>Clan Tag:</span> <div className="clan-tag">{clan.tag}</div>
                                    </div>
                                    <div className="clan_name det">
                                        <span>Clan Name:</span> <div className="clan-name">{clan.name}</div>
                                    </div>
                                    <div className="required-level det">
                                        <span>Clan Required Level:</span> {clan.requiredLevel}
                                    </div>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    {!hasClan && <button className="create-clan" onClick={() => setCreateClanModal(true)}>Create Clan</button>}
                </div>
                {createClanModal && <div className="create-clan-modal-container">
                    <div className="create-clan-modal">
                        <div className="create-clan-header-text">
                            Create A New Clan
                        </div>
                        <div className="new-clan-details">
                            <input type="text" className="new-clan-name new-clan-input" placeholder='Enter Clan Name...' maxLength={20} ref={createClanNameRef} />
                            <input type="text" className="new-clan-tag new-clan-input" placeholder='Enter Clan Tag...' maxLength={3} minLength={3} ref={createClanTagRef} />
                            <input type="number" className="new-clan-required-level new-clan-input" placeholder='Enter Required Level...(optional)' ref={createRequiredLevelTagRef} onInput={() => {if (document.getElementsByClassName('new-clan-required-level')[0].value.length > 3) document.getElementsByClassName('new-clan-required-level')[0].value = document.getElementsByClassName('new-clan-required-level')[0].value.slice(0, 3)}} />
                            <br />
                            <button className="create-clan-modal-btn" onClick={() => createClan()}>Create</button>
                            <button className="cancel-create-clan" onClick={() => setCreateClanModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
                }
                {selectedClan.length > 0 &&
                <div className="clan-details-modal-container">
                    <div className="clan-details-modal">
                        {
                            JSON.parse(localStorage.getItem("clans")).map(clan => (
                            clan.id === selectedClan && 
                            <div className="clan-details" key={clan.id}>
                                <div className="clan-deatail-name clan-detail">
                                    Clan Name: {clan.name}
                                </div>
                                <div className="clan-deatail-tag clan-detail">
                                    Clan Tag: [{clan.tag}]
                                </div>
                                <div className="clan-deatail-req-lvl clan-detail">
                                    Required Level To Join: {clan.requiredLevel}
                                </div>
                                <div className="clan-deatail-members clan-detail">
                                   Members: <br />{clan.members.map(member => (member.name + `${member.name === localStorage.getItem("name") ? ' (You)' : ''}`))}
                                </div>
                                {clan.members.map(member => member.id !== localStorage.getItem("ID") ? <button className="join-clan" onClick={() => joinClan(clan.id)}>Join This Clan</button> : <button className="leave-clan" onClick={() => leaveClan(clan.id)}>Leave This Clan</button>)}
                            </div>
                        ))}
                        <div className="close">
                            <img src="src/assets/X.png" alt="" className="close_img" onClick={() => setSelectedClan('')} />
                        </div>
                    </div>
                </div>
                }
                {haveClanNote && <div className="have-clan-note">
                    ⚠️ You Are Already Have A Clan!
                </div>}
                {isMember && <div className="have-clan-note">
                    ⚠️ You Are Not A Member Of This Clan!
                </div>}
            </div>
        </div>
        </>
    )
}
