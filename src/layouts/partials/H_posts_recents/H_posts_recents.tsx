import { Base_Posts_Recents, Content_Posts_Recents } from "./StyH_posts_recents"
import { useEffect, useState } from "react"
import api from "../../../services/Api"
import Moment from "react-moment"
import moment from "moment"




// 2018-04-01 19:00:00

const H_Posts_Recents = () =>{
    const [dados, setDados] = useState<any | null>(null)


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
        ReqRes()
        console.log(dados?.[0].publishedAt);
    },[])




    return(
        <Base_Posts_Recents>
            <Content_Posts_Recents test={dados?.[0].urlToImage}  posts={dados?.[1].urlToImage} postsTwo={dados?.[4].urlToImage} >
                    <a href={dados?.[0].url} target="_blank">
            <div className="post_recents_main" >
                    <div className="post_title ">
                    <h1><a href={dados?.[0].url} target="_blank">{dados?.[0].title}</a></h1>
                    <span className="post_infors">
                        <img src={dados?.[0].urlToImage} alt="" />
                        <p>{dados?.[0].author} • </p>
                        
                        <span className="post_infors_date"><p>{moment(dados?.[0].publishedAt).subtract(0, 'days').calendar()}</p></span>
                        
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
                        <span className="post_infors_date"><p>{moment(dados?.[1].publishedAt).subtract(0, 'days').calendar()}</p></span>
                    </span>
                    </div>
            </div>
            </a>
            <a href={dados?.[2].url} target="_blank">
            <div className="posts">
            <div className="post_title imgTwo">
                    <h1>{dados?.[2].title.substring(0, 75)+'...'}</h1>
                    <span className="post_infors">
                        <img src={dados?.[2].urlToImage} />
                        <p>{dados?.[2].author?.substring()+''} • </p>
                        <span className="post_infors_date"><p>{moment(dados?.[2].publishedAt).subtract(0, 'days').calendar()}</p></span>
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