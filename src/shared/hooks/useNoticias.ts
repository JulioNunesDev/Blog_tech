import { useContext } from "react"
import { NoticiasTopLine } from "../../contexts/NoticiasDados"



const useNoticiasTopLines = ()=>{
    const context = useContext(NoticiasTopLine)
    return context
}

export default useNoticiasTopLines