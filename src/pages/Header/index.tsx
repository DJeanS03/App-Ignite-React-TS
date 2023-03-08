import './styles.css';
import igniteLogo from '../../assets/ignite-logo.svg';

export function Header(){
    return(
        <div className='header'>
            <div className="header_container">
                <img className='logo' src={igniteLogo} alt="Logoignite" />
                <p>Ignite Feed</p>
            </div>
        </div>
    )
}