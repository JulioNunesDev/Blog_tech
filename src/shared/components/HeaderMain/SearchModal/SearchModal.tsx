import styled, {keyframes} from "styled-components"
import useSearchProvider from "../../../../contexts/ContextSearchDados"

const animacaoInput = keyframes`
from{
    opacity: 0;
    transform: translateY(-15px);
}
to{
    opacity: 1;
    transform: translateY(0);
}
`

const SearchModal = styled.div`
width: 100%;
height: 100vh;
background-color: #000000ee;
position: absolute;
top: 0;
bottom: 0;
z-index:3;
display: flex;
justify-content: center;
align-items: center;


.content{
    animation: ${animacaoInput} .5s ease-in-out ;
    position: absolute;
    width: 100%;
    height: 700px;
    background-color: #1a19197d;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    .texts-Input{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        
   h2{
    
    font-size: 45px;
    font-family: var(--font-sansation);
    font-weight: 700;
    color: #959494ce;

   }
    input{
        border-radius: 8px;
        width: 70%;
        height: 100px;
        font-size: 30px;
        text-align: center;
        font-family: var(--font-sansation);
        text-transform: capitalize;
        border: 1px solid #2e2e2eaf;
        outline: none;
        background-color: #2e2e2eaf;
        transition: all .2s ease-in-out;
        color: #ffffff;
    }
    input:focus{
        border: 2px solid #fafafa;
    }
}

    .button{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 55px;
        height: 55px;
        align-items: center;
        background-color: #2e2e2eaf;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        z-index: 3;
        transition: all .1s ease-in;
        span{
            color: #fff;
            padding: 2px;
          font-size:35px;  
          font-family: var(--font-sansation);
          font-weight: 700;
        }
    }
    .button:hover{
        background-color: var(--color-fundo2);
        cursor: pointer;
    }

}

`

interface IOpen {
    OpenModalSearch: ()=>void
}

const SearchModalComponent = ({OpenModalSearch}:IOpen)=>{

    const {inputSearchDados, setInputSearchDados} = useSearchProvider()

    const InputHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const data = event.target.value
        setInputSearchDados(data)
    }
    
    //Chamada da Api passando o Valor do Input para como params
    //fazer tratamento de dados e otimizar 
    // lenght caracteres max 
    
    return(
        <SearchModal >
            <div className="content">
                <div className="button">
                    <span
                     onClick={OpenModalSearch}>X</span>
                </div>
                <div className="texts-Input">
            <input autoFocus  type="text" placeholder="Pesquise aqui"  value={inputSearchDados}
                    onChange={InputHandler} />
            <h2>" Press Enter "</h2>
            <h2>{inputSearchDados}</h2>
            </div>
            </div>
        </SearchModal>
    )
}

export default SearchModalComponent