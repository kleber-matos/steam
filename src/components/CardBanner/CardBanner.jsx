import './CardBanner.css'
import cardbanner from '../../assets/bannercard.png'

const CardBanner = () => {
    return (
        <>
        <div className='card-banner'>
            <figure><img src={cardbanner} alt="" /></figure>
            <p>
            Estados Unidos, 1899. O fim da era do velho oeste começou, e as autoridades estão caçando as últimas gangues de fora da lei que restam. Os que não se rendem, nem sucumbem, são mortos.z
            </p>
            <button>COMPRAR AGORA</button>
        </div>
        </>
    )
}

export default CardBanner;