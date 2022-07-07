import { useState } from "react";
import { Link } from "react-router-dom";
import Icons from '../Icons/IconsAssets'
import SearchModalComponent from "./SearchModal/SearchModal";
import { Content, Ctx_Navegation } from "./styHeaderMain";

interface IHeader {
}
const HeaderMain: React.FC<IHeader> = () =>{
    const [openModal, setOpenModal]=useState(false)

    function OpenModalSearch(){
        setOpenModal(!openModal)
    }
    return(
        <>
        <Content >
            <Ctx_Navegation>
                
                {openModal ? <SearchModalComponent OpenModalSearch={OpenModalSearch} /> : '' }
                <div className="logo">
                    <li><Link to='/'>DynamicsTech</Link></li>
                </div>
                <div className="header-menu">
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link className="icon" to='/'>Categorias <img src={Icons.arrow}/></Link></li>
                    <li><Link className="icon" to='/'>Blog</Link></li>
                    <li><Link to='/'>LifeStyle</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link className="icon" to='/' onClick={OpenModalSearch}><img src={Icons.search} /></Link></li>
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