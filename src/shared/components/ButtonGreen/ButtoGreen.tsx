import { Content, Ctx_Button } from "./styButtonGreen";

interface Dados {
    PosiDiv?: string
    topPadding: string
    rationPadding: string
    backGround: string
}
const ButtoGreen: React.FC<Dados> = ({PosiDiv, topPadding, rationPadding}) =>{
    return(
        <>
        <Content position={PosiDiv}>
            <Ctx_Button topPadding={topPadding} rationPadding={rationPadding}>
            texto
            </Ctx_Button>
        </Content>
        </>
    )
}


export default ButtoGreen