import { Link } from "react-router-dom";
import Icons from '../Icons/IconsAssets'
import { Content, Ctx_Navegation } from "./styHeaderMain";

interface IHeader {
}
const HeaderMain: React.FC<IHeader> = () =>{
    return(
        <>
        <Content >
            <Ctx_Navegation>
                <div className="logo">
                    <li><Link to='/'>DynamicsTech</Link></li>
                </div>
                <div className="header-menu">
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Categorias</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>LifeStyle</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Search aqui</Link></li>
                    </ul>
                </div>
                <div className="icons-sociais">
                    <ul>
                        <li><a href="/linkedin"><img src={Icons.linkedin} alt="Linkedin" /></a></li>
                        <li><a href="/linkedin"><img src={Icons.twitter} alt="Twitter" /></a></li>
                        <li><a href="/linkedin"><img src={Icons.github} alt="GitHub" /></a></li>
                        <li><a href="/linkedin"><img src={Icons.instagram} alt="Instagram" /></a></li>
                    </ul>
                </div>
            </Ctx_Navegation>
        </Content>
        </>
    )
}


export default HeaderMain