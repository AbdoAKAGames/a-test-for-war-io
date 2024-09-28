import { useState, useEffect } from 'react'
import '../../game.css'
import { supabase } from '../../App';

export default function WeaponsShop({ setCurrentShopItem, melee, pistol, main, explosives, packs, skins, bodies, hands, emojis }) {

    const [gotItem, setGotItem] = useState(false);
    const [item, setItem] = useState({});
    const [currency, setCurrency] = useState({});


    useEffect(() => {
        getCurrency();
    });

    async function getCurrency() {
        const { data } = await supabase.from('currency').select();
        setCurrency(data[0]);
    }

    const meleeShopItems = [
        {
            name: "Katana",
            src: "src/assets/katana.png",
            price: 50,
            priceType: "gems",
            rank: "legend",
            obtained: false,
        },
        {
            name: "Tiger Karambit",
            src: "src/assets/tiger karambit.png",
            price: 200,
            priceType: "gems",
            rank: "mythic",
            obtained: false,
        },
    ]
    

    function checkObtained(){
        melee.map(mele => {
            meleeShopItems.map(item => {
                if (mele.name === item.name && mele.unlocked) {
                    item.obtained = true;
                }
            })
        })
    }

    window.onload = checkObtained();


    function buy(item, i) {
        if (!item.obtained && currency[item.priceType] >= item.price) {
            melee.push({name: item.name, src: item.src, rank: item.rank, unlocked: true});
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
            let gems = currency.gems;
            let coins = currency.coins;
            (async () => {
                const { data } = await supabase.from('currency').update({ gems: gems - item.price }).eq('id', localStorage.id);
                document.getElementsByClassName(`${item.priceType === 'gems' ? 'gems' : 'coins'}_currency_count`)[0].innerHTML = (await supabase.from('currency').select()).data[0].gems
            })();
            item.obtained = true;
            document.getElementsByClassName('shop-card')[i].classList.replace('false', 'true');
            setGotItem(true);
            setItem(item);
        }
    }
    return (
        <>
            <div className="weapons-shop-modal item-shop-modal">
                <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="weapons-shop item-shop">
                    <div className="weapons-shop-title item-shop-title">
                        Weapons
                    </div>
                    <div className="shop-cards-container">
                        <div className="shop-cards">
                            {meleeShopItems.map((item, i) => (
                                <div className={"shop-card " + item.obtained} key={i} onClick={() => buy(item, i)}>
                                    <div className="shop-card-name">
                                        {item.name}
                                    </div>
                                    <div className={"shop-card-image " + item.rank}>
                                        <img src={item.src} className={item.rank} alt="gear" draggable={false} />
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