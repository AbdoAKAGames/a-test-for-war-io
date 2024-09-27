import '../game.css'
import { Currency } from './currency'
import { Title } from './title'
import { TopLeft } from './topleft'


export function Header({ showProfile, id }){
    

    return (
        <>
        <Title />
        <TopLeft showProfile={showProfile} id={id} />
        <Currency />
        </>
    )
}