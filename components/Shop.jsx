import { useState } from 'react'
import '../game.css'
import GemsShop from './shop/gems-shop';
import WeaponsShop from './shop/weapons-shop';
import SkinsShop from './shop/skins-shop';
import BodiesShop from './shop/bodies-shop';
import HandsShop from './shop/hands-shop';
import EmojisShop from './shop/emojis-shop';

export function Shop({ setIsShop, melee, pistol, main, explosives, packs, skins, bodies, hands, emojis }) {

    const [currentShopItem, setCurrentShopItem] = useState('');

    const shopItems = [
        {
            name: 'Gems',
            image: 'src/assets/gems icon.png',
            shopItem: 'gems',
        },
        {
            name: 'Melee',
            image: 'src/assets/tiger karambit.png',
            shopItem: 'melee',
        },
        {
            name: 'Skins',
            image: 'src/assets/flowers.png',
            shopItem: 'skins',
        },
        {
            name: 'Bodies',
            image: 'src/assets/white.png',
            shopItem: 'bodies',
        },
        {
            name: 'Hands',
            image: 'src/assets/basic_hand.png',
            shopItem: 'hands',
        },
        {
            name: 'Emojis',
            image: 'src/assets/like emoji.png',
            shopItem: 'emojis',
        },
    ]

    return (
        <>
            <div className="shop-container">
                <div className="close" onClick={() => setIsShop(false)}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="shop">
                    <div className="shop-title">
                        Shop
                    </div>
                    {shopItems.map((item, index) => (
                        <div className="shop-item" key={index} onClick={() => setCurrentShopItem(item.shopItem)}>
                            <div className="shop-item-image">
                                <img src={item.image} alt={item.shopItem} draggable={false} />
                            </div>
                            <div className="shop-item-name">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
                    {
                        currentShopItem === 'gems'
                        &&
                        <GemsShop setCurrentShopItem={setCurrentShopItem} />
                    }
                    {
                        currentShopItem === 'melee'
                        &&
                        <WeaponsShop
                        setCurrentShopItem={setCurrentShopItem}
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        />
                    }
                    {
                        currentShopItem === 'skins'
                        &&
                        <SkinsShop
                        setCurrentShopItem={setCurrentShopItem}
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        />
                    }
                    {
                        currentShopItem === 'bodies'
                        &&
                        <BodiesShop
                        setCurrentShopItem={setCurrentShopItem} 
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        />
                    }
                    {
                        currentShopItem === 'hands'
                        &&
                        <HandsShop
                        setCurrentShopItem={setCurrentShopItem}
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        />
                    }
                    {
                        currentShopItem === 'emojis'
                        &&
                        <EmojisShop
                        setCurrentShopItem={setCurrentShopItem}
                        melee={melee}
                        pistol={pistol}
                        main={main}
                        explosives={explosives}
                        packs={packs}
                        skins={skins}
                        bodies={bodies}
                        hands={hands}
                        emojis={emojis}
                        />
                    }
            </div>
        </>
    )
}