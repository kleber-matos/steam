import './CardGames.css'

const CardGames = (props) => {
    return (
        <>
        <div className='jogos'> 
            <img src={props.img} alt="" />
        </div>
        </>
    )
}

export default CardGames;