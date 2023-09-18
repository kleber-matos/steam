import "./Header.css"
import steam from '../../assets/steam.png';
import sino from '../../assets/sino.png'
import lupa from '../../assets/lupa.png'
import user from '../../assets/user.png'
const Header = () => {
    return(
        <>
        <header>
            <div>
                <ul>
                    <li><img src={steam} alt="" /></li>
                    <li><a href="">LOJA</a></li>
                    <li><a href="">BIBLIOTECA</a></li>
                    <li><a href="">COMUNIDADE</a></li>
                    <li><a href="">AJUDA</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><img src={sino} alt="" /></li>
                    <li><img src={lupa} alt="" /></li>
                    <li><img src={user} alt="" /></li>
                    <li>icons</li>
                    <li>icons</li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header;