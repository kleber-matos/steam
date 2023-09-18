import CardNovidades from '../Card-novidades/Card-novidades';
import CardGames from '../CardGames/CardGames';
import './Games.css'
import logoFarcry from '../../assets/nomeFarcry.png'
import forza from '../../assets/forza.png'
const Games = () => {
    return (
        <>
            <div className='games'>
                <CardNovidades/>
            </div>
            <div className='cardgames'>
            <CardGames logo={logoFarcry}/>
            <CardGames logo={forza}/>
            <CardGames logo={logoFarcry}/>
            </div>
        </>
    )
}

export default Games;