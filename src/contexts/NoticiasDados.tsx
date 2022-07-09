import {createContext, ReactNode, SetStateAction, useEffect, useState}  from 'react'
import api from '../services/Api';

type NoticiasTopLine = {
    noticiasTopLine: string;
    setNoticiasTopLine: React.Dispatch<SetStateAction<string>>
   
}

type  Children = {
    children: ReactNode
}

const initializador = {
    noticiasTopLine: '',
    setNoticiasTopLine: ()=>{}
}
export const NoticiasTopLine = createContext<NoticiasTopLine>({} as NoticiasTopLine)


export default function NoticiasProvider({children}: Children){
    const [noticiasTopLine, setNoticiasTopLine] = useState(initializador)

    useEffect(()=>{
        api.get('').then((res)=>{
            const data = res.data
            setNoticiasTopLine(data)
        }).catch((err)=>console.log('Erro na requisição: ', err))
        
    },[])

    return(
        <NoticiasTopLine.Provider value={noticiasTopLine}>
            {children}
        </NoticiasTopLine.Provider>
    )
}