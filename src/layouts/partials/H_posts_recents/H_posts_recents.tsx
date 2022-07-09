import { Base_Posts_Recents, Content_Posts_Recents } from "./StyH_posts_recents"
import { useEffect, useState } from "react"
import api from "../../../services/Api"
import moment from "moment"
import 'moment/locale/pt-br'


const H_Posts_Recents = () =>{
    const [dados, setDados] = useState<any>(null)
    const [dataPublicao, setDataPublic] = useState<any>([])
    const [capa, setCapa] = useState<any>(0)


    useEffect(()=>{
        async function ReqRes(){
            await api.get('')
            .then((response)=>{
              setDados(response.data.articles)
                console.log(response.data.articles);
                
                
            })
            .catch((err)=>{
                console.log('Erro na requisicao: ', err);
            })
        }
        const horas = dados?.[0].publishedAt
        const tempo = moment(horas).startOf('hours').fromNow()
        ReqRes()
        setDataPublic(tempo)
      
        let temporizador =setInterval(()=>{
            let random = [0,1,2,3,4,5,6,7,8,9]
            let valor = random[Math.floor(Math.random()*random.length)]
            setCapa(valor)
        }, 1000 * 50 )

        return ()=>{
            clearInterval(temporizador)
        }

    },[])

    
   



    return(
        <Base_Posts_Recents postCapa={dados?.[capa].urlToImage}>
            <Content_Posts_Recents test={dados?.[0].urlToImage}  posts={dados?.[1].urlToImage} postsTwo={dados?.[4].urlToImage} >
                    <a href={dados?.[0].url} target="_blank">
            <div className="post_recents_main" >
                    <div className="post_title ">
                    <h1><a href={dados?.[0].url} target="_blank">{dados?.[0].title}</a></h1>
                    <span className="post_infors">
                        <img src={dados?.[0].urlToImage} alt="" />
                        <p>{dados?.[0].author} • </p>
                        
                        <span className="post_infors_date"><p>{dataPublicao}</p></span>
                        
                    </span>
                    </div>
            </div>
                    </a>               
            <div className="posts_recents" >
            <a href={dados?.[1].url} target="_blank">
            <div className="posts">
                 <div className="post_title imgOne">
                    <h1>{dados?.[1].title.length > 45 ? dados?.[1].title.substring(0, 50)+'...' : ''}</h1>
                    <span className="post_infors">
                        <img src={dados?.[1].urlToImage} alt="" />
                        <p>{dados?.[1].author} • </p>
                        <span className="post_infors_date"><p>{dataPublicao}</p></span>
                    </span>
                    </div>
            </div>
            </a>
            <a href={dados?.[2].url} target="_blank">
            <div className="posts">
            <div className="post_title imgTwo">
                    <h1>{dados?.[4].title.substring(0, 75)+'...'}</h1>
                    <span className="post_infors">
                        <img src={dados?.[2].urlToImage} />
                        <p>{dados?.[2].author} • </p>
                        <span className="post_infors_date"><p>{dataPublicao}</p></span>
                    </span>
                    </div>
            </div>
            </a>
            </div>
            </Content_Posts_Recents>
        </Base_Posts_Recents>
    )
}


export default H_Posts_Recents