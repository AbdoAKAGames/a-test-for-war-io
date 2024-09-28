import { useState } from 'react';
import '../../game.css'

export default function EmojisShop({ setCurrentShopItem, melee, pistol, main, explosives, packs, skins, bodies, hands, emojis }) {


    const [gotItem, setGotItem] = useState(false);
    const [item, setItem] = useState({});

    const emojiShopItems = [
        {
            name: "like",
            src: "src/assets/like emoji.png",
            price: 20,
            priceType: "coins",
            rank: "common",
            obtained: false,
        },
    ]

    function checkObtained(){
        emojis.map(emoji => {
            emojiShopItems.map(item => {
                if (emoji.name === item.name && emoji.unlocked) {
                    item.obtained = true;
                }
            })
        })
    }

    window.onload = checkObtained();


    function buy(item, i) {
        if (!item.obtained && +JSON.parse(localStorage.getItem(item.priceType)) >= item.price) {
            emojis.push({name: item.name, src: item.src, rank: item.rank, unlocked: true});
            const newWeapons = [{
                melee: melee,
                pistol: pistol,
                main: main,
                explosives: explosives,
                packs: packs,
                skins: skins,
                bodies: bodies,
                hands: hands,
                emojis: emojis,
            }];
            localStorage.setItem("weapons", JSON.stringify(newWeapons));
            localStorage.setItem(item.priceType, +localStorage.getItem(item.priceType) - item.price);
            document.getElementsByClassName('gems_currency_count')[0].innerHTML = localStorage.gems;
            item.obtained = true;
            document.getElementsByClassName('shop-card')[i].classList.replace('false', 'true');
            setGotItem(true);
            setItem(item);
        }
    }


    return (
        <>
            <div className="emojis-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="emojis-shop item-shop">
                    <div className="emojis-shop-title item-shop-title">
                        Emojis
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                        {emojiShopItems.map((item, i) => (
                                <div className={"shop-card emoji-card " + item.obtained} onClick={() => buy(item, i)}>
                                    <div className="shop-card-name">
                                        {item.name}
                                    </div>
                                    <div className={"shop-card-image " + item.rank}>
                                        <img src={item.src} alt="gear" draggable={false} />
                                    </div>
                                    <div className="shop-card-price">
                                        <img src={item.priceType === 'gems' ? "src/assets/gems icon.png" : "src/assets/coins icon.png"} alt="gems" className="card-price-currency" draggable={false} />
                                        {item.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {gotItem &&
                <div className="got-item-modal">
                    <div className="got-item">
                        <div className="got-item-header">
                            You Got A New Item
                        </div>
                        <div className="got-item-card">
                            <div className="got-item-card-name">
                                {item.name}
                            </div>
                            <div className={"got-item-card-image " + item.rank}>
                                <img src={item.src} alt="got item image" draggable={false} />
                            </div>
                        </div>
                        <div className="ok">
                            <button className="ok-btn" onClick={() => setGotItem(false)}>
                                OK
                            </button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}