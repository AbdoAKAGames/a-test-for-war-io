import { useRef } from 'react'
import { useState } from 'react';
import '../game.css'

export function Gear({ gearContent,
    saveGear,
    melee,
    pistol,
    main,
    explosives,
    packs,
    skins,
    bodies,
    hands,
    emojis,
    perks,
    forbiddenUsingTwoPerks,
 }){
    let clicked = '';

    const choose = useRef(null);
    const chooseContainer = useRef(null);
    const [showedCItems, setShowedCItems] = useState(false);
    const weapon1 = useRef(null);
    const weapon2 = useRef(null);
    const weapon3 = useRef(null);
    const weapon4 = useRef(null);
    const weapon5 = useRef(null);
    const skinImage = useRef(null);
    const bodyImage = useRef(null);
    const handImage = useRef(null);
    const emoji1 = useRef(null);
    const emoji2 = useRef(null);
    const emoji3 = useRef(null);
    const emoji4 = useRef(null);
    const perk1 = useRef(null);
    const perk2 = useRef(null);
    const perk3 = useRef(null);


    function hide(item) {
        item.current.style.display = 'none';
        setShowedCItems(false);
        clicked = '';
    }


    

    function showChooseItems(array){
        choose.current.style.display = 'block';
        chooseContainer.current.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            const chooseItem = document.createElement('div');
            chooseItem.classList.add('choose_item');
            chooseItem.classList.add(array[i].rank);
            chooseItem.classList.add(array[i].unlocked ? "unlocked" : "locked");
            chooseItem.innerHTML = `
            <div class="choose_image_container">
                <img src="${array[i].src}" class="choose_image" draggable="false" />
            </div>
            <div class="choose_text_container_inside">
                <div class="choose_text_inside">
                    ${array[i].name}
                </div>
            </div>`;
            chooseContainer.current.append(chooseItem);
            var chooseImage = document.getElementsByClassName('choose_image')[i];
            const weaponsArr = [
                {
                    name: "weapon_1",
                    image: weapon1.current.getElementsByClassName('weapon_1_image')[0],
                    text: weapon1.current.getElementsByClassName('weapon_1_text')[0],
                    isWeapon: true,
                },
                {
                    name: "weapon_2",
                    image: weapon2.current.getElementsByClassName('weapon_2_image')[0],
                    text: weapon2.current.getElementsByClassName('weapon_2_text')[0],
                    isWeapon: true,
                },
                {
                    name: "weapon_3",
                    image: weapon3.current.getElementsByClassName('weapon_3_image')[0],
                    text: weapon3.current.getElementsByClassName('weapon_3_text')[0],
                    isWeapon: true,
                },
                {
                    name: "weapon_4",
                    image: weapon4.current.getElementsByClassName('weapon_4_image')[0],
                    text: weapon4.current.getElementsByClassName('weapon_4_text')[0],
                    isWeapon: true,
                },
                {
                    name: "weapon_5",
                    image: weapon5.current.getElementsByClassName('weapon_5_image')[0],
                    text: weapon5.current.getElementsByClassName('weapon_5_text')[0],
                    isWeapon: true,
                },
                {
                    name: "skin_img",
                    image: skinImage.current,
                    isWeapon: false,
                    isEmoji: false,
                },
                {
                    name: "body_img",
                    image: bodyImage.current,
                    isWeapon: false,
                    isEmoji: false,
                },
                {
                    name: "hand_img",
                    image: handImage.current,
                    isWeapon: false,
                    isEmoji: false,
                },
                {
                    name: "emoji_1",
                    image: emoji1.current,
                    type: emojis,
                    isEmoji: true,
                    isWeapon: false,
                },
                {
                    name: "emoji_2",
                    image: emoji2.current,
                    type: emojis,
                    isEmoji: true,
                    isWeapon: false,
                },
                {
                    name: "emoji_3",
                    image: emoji3.current,
                    type: emojis,
                    isEmoji: true,
                    isWeapon: false,
                },
                {
                    name: "emoji_4",
                    image: emoji4.current,
                    type: emojis,
                    isEmoji: true,
                    isWeapon: false,
                },
                {
                    name: "perk_1",
                    image: perk1.current.getElementsByClassName('perk_1_image')[0],
                    text: perk1.current.getElementsByClassName('perk_1_text')[0],
                    type: perks,
                    isWeapon: true,
                },
                {
                    name: "perk_2",
                    image: perk2.current.getElementsByClassName('perk_2_image')[0],
                    text: perk2.current.getElementsByClassName('perk_2_text')[0],
                    type: perks,
                    isWeapon: true,
                },
                {
                    name: "perk_3",
                    image: perk3.current.getElementsByClassName('perk_3_image')[0],
                    text: perk3.current.getElementsByClassName('perk_3_text')[0],
                    type: perks,
                    isWeapon: true,
                },
            ]
            function changeGear(image, text, isWeapon, isEmoji){
                image.src = array[i].src;
                if (text) text.innerHTML = array[i].name;
                if (isWeapon) {image.parentElement.classList = `${clicked}_image_container weapon_image_container ${array[i].rank}`;}
                if (!isWeapon && !isEmoji) {
                    image.parentElement.classList = `${clicked}_container skin_item_img_container ${array[i].rank}`;
                }
                if (isEmoji) image.classList = `${clicked} emoji ${array[i].rank}`;
                localStorage.setItem(clicked, JSON.stringify(array[i]))
                if (array === perks) {
                    chooseImage.style.pointerEvents = 'none';
                }
            }
            chooseImage.addEventListener("click", () => {
                weaponsArr.forEach(weapon => {
                    if (clicked == weapon.name) changeGear(weapon.image, weapon.text, weapon.isWeapon, weapon.isEmoji);
                })
            })
        }
    }



    function handleWeaponClicks(type, clickedItem) {
        clicked = clickedItem
        if (!showedCItems) {
            showChooseItems(type);
        }
    }

    
    forbiddenUsingTwoPerks();


    
    saveGear()


    return (
        <>
        <div className="gear_content item_content" ref={gearContent}>
                            <div className="gear_content_title item_content_title">
                                <div className="gear_content_title_text item_content_title_text">
                                    GEAR
                                </div>
                            </div>
                            <div className="set_gear">
                                <div className="set_gear_text">
                                    SET YOUR GEAR
                                </div>
                            </div>
                            <div className="weapons">
                                <div className="weapons_container">
                                    <div className="weapon_1 weapon" ref={weapon1} style={{borderTopRrightRadius: 10 + 'px', borderTopLeftRadius: 10 + 'px'}} onClick={() => {handleWeaponClicks(melee, 'weapon_1');console.log(clicked)}}>
                                        <div className={'weapon_1_image_container weapon_image_container ' + JSON.parse(localStorage.getItem("weapon_1")).rank}>
                                            <img className="weapon_1_image weapon_image" src={JSON.parse(localStorage.getItem("weapon_1")).src} draggable="false" />
                                        </div>
                                        <div className="weapon_1_text_container weapon_text_container">
                                            <div className="weapon_1_text weapon_text small">
                                                {JSON.parse(localStorage.getItem("weapon_1")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weapon_2 weapon" ref={weapon2} onClick={() => {handleWeaponClicks(pistol, 'weapon_2')}}>
                                        <div className={'weapon_2_image_container weapon_image_container ' + JSON.parse(localStorage.getItem("weapon_2")).rank}>
                                            <img className="weapon_2_image weapon_image" src={JSON.parse(localStorage.getItem("weapon_2")).src} draggable="false" />
                                        </div>
                                        <div className="weapon_2_text_container weapon_text_container">
                                            <div className="weapon_2_text weapon_text small">
                                                {JSON.parse(localStorage.getItem("weapon_2")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weapon_3 weapon" ref={weapon3} onClick={() => {handleWeaponClicks(main, 'weapon_3')}}>
                                        <div className={'weapon_3_image_container weapon_image_container ' + JSON.parse(localStorage.getItem("weapon_3")).rank}>
                                            <img className="weapon_3_image weapon_image" src={JSON.parse(localStorage.getItem("weapon_3")).src} draggable="false" />
                                        </div>
                                        <div className="weapon_3_text_container weapon_text_container">
                                            <div className="weapon_3_text weapon_text small">
                                                {JSON.parse(localStorage.getItem("weapon_3")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weapon_4 weapon" ref={weapon4} onClick={() => {handleWeaponClicks(explosives, 'weapon_4')}}>
                                        <div className={'weapon_4_image_container weapon_image_container ' + JSON.parse(localStorage.getItem("weapon_4")).rank}>
                                            <img className="weapon_4_image weapon_image" src={JSON.parse(localStorage.getItem("weapon_4")).src} draggable="false" />
                                        </div>
                                        <div className="weapon_4_text_container weapon_text_container">
                                            <div className="weapon_4_text weapon_text small">
                                                {JSON.parse(localStorage.getItem("weapon_4")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="weapon_5 weapon" ref={weapon5} onClick={() => {handleWeaponClicks(packs, 'weapon_5')}}>
                                        <div className={'weapon_5_image_container weapon_image_container ' + JSON.parse(localStorage.getItem("weapon_5")).rank}>
                                            <img className="weapon_5_image weapon_image" src={JSON.parse(localStorage.getItem("weapon_5")).src} draggable="false" />
                                        </div>
                                        <div className="weapon_5_text_container weapon_text_container">
                                            <div className="weapon_5_text weapon_text small" >
                                                {JSON.parse(localStorage.getItem("weapon_5")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="perk_1 weapon" ref={perk1} onClick={() => handleWeaponClicks(perks, "perk_1")}>
                                        <div className={"perk_1_image_container weapon_image_container " + JSON.parse(localStorage.getItem("perk_1")).rank}>
                                            <img className="perk_1_image weapon_image" src={JSON.parse(localStorage.getItem("perk_1")).src} draggable="false" />
                                        </div>
                                        <div className="perk_1_text_container weapon_text_container">
                                            <div className="perk_1_text weapon_text small">
                                                {JSON.parse(localStorage.getItem("perk_1")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="perk_2 weapon" ref={perk2} onClick={() => handleWeaponClicks(perks, "perk_2")}>
                                        <div className={"perk_2_image_container weapon_image_container " + JSON.parse(localStorage.getItem("perk_2")).rank}>
                                            <img className="perk_2_image weapon_image" src={JSON.parse(localStorage.getItem("perk_2")).src} draggable="false" />
                                        </div>
                                        <div className="perk_2_text_container weapon_text_container">
                                            <div className="perk_2_text weapon_text small">
                                            {JSON.parse(localStorage.getItem("perk_2")).name}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="perk_3 weapon" ref={perk3} onClick={() => handleWeaponClicks(perks, "perk_3")}>
                                        <div className={"perk_3_image_container weapon_image_container " + JSON.parse(localStorage.getItem("perk_3")).rank}>
                                            <img className="perk_3_image weapon_image" src={JSON.parse(localStorage.getItem("perk_3")).src} draggable="false" />
                                        </div>
                                        <div className="perk_3_text_container weapon_text_container">
                                            <div className="perk_3_text weapon_text small">
                                            {JSON.parse(localStorage.getItem("perk_3")).name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skins">
                                <div className="skins_container">
                                    <div className="skin_container skin_item_container">
                                        <div className="skin_header skin_item_header">
                                            SKIN
                                        </div>
                                        <div className={"skin_img_container skin_item_img_container " + JSON.parse(localStorage.getItem("skin_img")).rank} onClick={() => handleWeaponClicks(skins, "skin_img")}>
                                            <img src={JSON.parse(localStorage.getItem("skin_img")).src} className="skin_img skin_item_img" draggable="false" ref={skinImage} />
                                        </div>
                                    </div>
                                    <div className="body_container skin_item_container">
                                        <div className="body_header skin_item_header">
                                            BODY
                                        </div>
                                        <div className={"body_img_container skin_item_img_container " + JSON.parse(localStorage.getItem("body_img")).rank} onClick={() => handleWeaponClicks(bodies, "body_img")}>
                                            <img src={JSON.parse(localStorage.getItem("body_img")).src} className="body_img skin_item_img" draggable="false" ref={bodyImage} />
                                        </div>
                                    </div>
                                    <div className="hand_container skin_item_container">
                                        <div className="hand_header skin_item_header">
                                            HAND
                                        </div>
                                        <div className={"hand_img_container skin_item_img_container " + JSON.parse(localStorage.getItem("hand_img")).rank} onClick={() => handleWeaponClicks(hands, "hand_img")}>
                                            <img src={JSON.parse(localStorage.getItem("hand_img")).src} className="hand_img skin_item_img" draggable="false" ref={handImage} />
                                        </div>
                                    </div>
                                </div>
                                <div className="emojis">
                                    <div className="emojis_container">
                                        <div className="emojis_header">
                                            <div className="emojis_header_text">
                                                EMOJIS
                                            </div>
                                        </div>
                                        <div className="emojis_imgs_container">
                                            <img src={JSON.parse(localStorage.getItem("emoji_1")).src} ref={emoji1} className={"emoji_1 emoji " + JSON.parse(localStorage.getItem("emoji_1")).rank} draggable="false" onClick={() => handleWeaponClicks(emojis, "emoji_1")} />
                                            <img src={JSON.parse(localStorage.getItem("emoji_2")).src} ref={emoji2} className={"emoji_2 emoji " + JSON.parse(localStorage.getItem("emoji_2")).rank} draggable="false" onClick={() => handleWeaponClicks(emojis, "emoji_2")} />
                                            <img src={JSON.parse(localStorage.getItem("emoji_3")).src} ref={emoji3} className={"emoji_3 emoji " + JSON.parse(localStorage.getItem("emoji_3")).rank} draggable="false" onClick={() => handleWeaponClicks(emojis, "emoji_3")} />
                                            <img src={JSON.parse(localStorage.getItem("emoji_4")).src} ref={emoji4} className={"emoji_4 emoji " + JSON.parse(localStorage.getItem("emoji_4")).rank} draggable="false" onClick={() => handleWeaponClicks(emojis, "emoji_4")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="choose" ref={choose}>
                                <div className="close">
                                    <img src="src\assets\X.png" className="close_img" draggable="false" onClick={() => hide(choose)} />
                                </div>
                                <div className="choose_text_container">
                                    <div className="choose_text">
                                        Choose an item
                                    </div>
                                </div>
                                <div className="choose_container_">
                                    <div className="choose_container" ref={chooseContainer}>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}