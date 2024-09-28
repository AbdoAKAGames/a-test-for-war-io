import '../game.css'
import { supabase } from '../App'
import { useState } from 'react'
import { useEffect } from 'react';

export function Currency(){
    const [currency, setCurrency] = useState({});


    useEffect(() => {getCurrency()});

    async function getCurrency() {
        const { data } = await supabase.from('currency').select().eq('id', localStorage.id);
        setCurrency(data[0]);
    }

    return (
        <>
        <div className="currency">
                <div className="gems_currency">
                    <div className="gems_icon_container">
                        <img src="../src/assets/gems icon.png" className="gems_icon shimmer" draggable="false" />
                    </div>
                    <div className="gems_currency_count_container">
                        <div className="gems_currency_count">
                            {currency.gems}
                        </div>
                    </div>
                </div>
                <div className="coins_currency">
                    <div className="coins_icon_container">
                        <img src="../src/assets/coins icon.png" className="coins_icon shimmer" draggable="false" />
                    </div>
                    <div className="coins_currency_count_container">
                        <div className="coins_currency_count">
                        {currency.coins}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}