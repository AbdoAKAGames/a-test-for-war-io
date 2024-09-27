import '../../game.css'

export default function GemsShop({ setCurrentShopItem }) {
    return (
        <>
            <div className="gems-shop-modal item-shop-modal">
            <div className="close" onClick={() => setCurrentShopItem('')}>
                    <img src="src/assets/X.png" alt="" className="close_img" />
                </div>
                <div className="gems-shop item-shop">
                    <div className="gems-shop-title item-shop-title">
                        Gems
                    </div>
                    <div className="shop-offer gems-offer">
                        <div className="shop-offer-image">
                            <img src="src/assets/gems icon.png" alt="gems offer" draggable={false} />
                        </div>
                        <div className="shop-offer-amount">
                            <span>50 Gems</span>
                        </div>
                        <div className="shop-offer-price">
                            <span className="price">0.99$</span>
                        </div>
                    </div>
                    <div className="shop-offer gems-offer">
                        <div className="shop-offer-image">
                            <img src="src/assets/gems icon.png" alt="gems offer" draggable={false} />
                        </div>
                        <div className="shop-offer-amount">
                            <span>100 Gems</span>
                        </div>
                        <div className="shop-offer-price">
                            <span className="price">1.99$</span>
                        </div>
                    </div>
                    <div className="shop-offer gems-offer">
                        <div className="shop-offer-image">
                            <img src="src/assets/gems icon.png" alt="gems offer" draggable={false} />
                        </div>
                        <div className="shop-offer-amount">
                            <span>200 Gems</span>
                        </div>
                        <div className="shop-offer-price">
                            <span className="price">4.99$</span>
                        </div>
                    </div>
                    <div className="shop-offer gems-offer">
                        <div className="shop-offer-image">
                            <img src="src/assets/gems icon.png" alt="gems offer" draggable={false} />
                        </div>
                        <div className="shop-offer-amount">
                            <span>500 Gems</span>
                        </div>
                        <div className="shop-offer-price">
                            <span className="price">9.99$</span>
                        </div>
                    </div>
                    <div className="shop-offer gems-offer">
                        <div className="shop-offer-image">
                            <img src="src/assets/gems icon.png" alt="gems offer" draggable={false} />
                        </div>
                        <div className="shop-offer-amount">
                            <span>1000 Gems</span>
                        </div>
                        <div className="shop-offer-price">
                            <span className="price">19.99$</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}