import styled from "styled-components";
import IHeader from '../interfaces/interfaces'

export const Content = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    height: 75px;
    justify-content: ${(props: IHeader) => props.position || undefined};
    background-color: ${(props: IHeader)=> props.backGround ||  'var(--color-fundo2)'};
    transition: all .2s ease-in-out;

`
export const Ctx_Navegation= styled.nav`

li, a{ 
    color:  #fff;
    text-decoration: none;
    list-style: none;
    font-family:var(--font-sansation);
}
  
position: relative;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;


        .logo{
            width:33,33%;
            height: auto;
        a {
            font-size: 28px;
            font-weight: 500;
            font-style: italic;
            }
        }

        .header-menu{
        width: 33,33%;
        height: auto;
        display: flex;
        ul{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 25px;
            font-size: 18px;
            font-weight: 300;
            
        }
        .icon{
            display: flex;
            align-items: center;
            
            gap: 5px;
        }

        .icon img {
            width: 16px;
            
        }




        }
        .icons-sociais{
            width:33,33%;
            height: auto;
            display: flex;
            ul{
                display: flex;
                gap: 10px;
            }
            li a img{
                width: 25px;
                transition: all .3s ease-in-out;
            }
            img:hover{
                transform: translateY(-10px);
            }
        }
        @media not screen  {
            
        }
    `
