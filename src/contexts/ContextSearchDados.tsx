import React, { ReactNode, useContext, useState } from "react";
interface Ichildren {
    children: ReactNode
}

const InitialValue = {
    inputSearchDados: '',
    setInputSearchDados: () => {}

}

interface ISearch{
    inputSearchDados: string;
    setInputSearchDados: React.Dispatch<React.SetStateAction<string>>
}


export const ContextSearch = React.createContext({} as ISearch)

export const AppSearchDados = ({children}:Ichildren )=>{

const [inputSearchDados, setInputSearchDados] = useState(InitialValue.inputSearchDados)


    return(

    <ContextSearch.Provider value={{inputSearchDados, setInputSearchDados}}>
        {children}
    </ContextSearch.Provider>
    )
}

 const useSearchProvider = ()=>{
    const context = useContext(ContextSearch)
    return context
}

export default useSearchProvider