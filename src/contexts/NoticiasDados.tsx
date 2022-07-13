import {createContext, ReactNode, SetStateAction, useContext, useEffect, useState}  from 'react'
import api from '../services/Api';

type NoticiasTopLine = {
    noticiasTopLine: any;
    setNoticiasTopLine: React.Dispatch<SetStateAction<any>>
   
}

type  Children = {
    children: ReactNode
}


export const NewsTopLine = createContext({} as NoticiasTopLine)


export default function NoticiasProvider({children}: Children){
    const [noticiasTopLine, setNoticiasTopLine] = useState<any>([])

    useEffect(()=>{
        api.get('').then((response)=>{
            
            setNoticiasTopLine(response.data.articles)
           
        }).catch((err)=>console.log('Erro na requisição: ', err))
        
    },[])

    return(
        <NewsTopLine.Provider value={noticiasTopLine}>
            {children}
        </NewsTopLine.Provider>
    )
}

export const useNoticiasTopLines = ()=>{
    const context = useContext(NewsTopLine)
    return context
}