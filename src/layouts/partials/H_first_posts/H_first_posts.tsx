
import { useEffect, useState } from 'react'
import React from 'react'
import api from '../../../services/Api'
import {Base_first_posts, Base_p_top, Base_p_inf } from './StyH_first_posts'
import moment from 'moment'

export default function H_first_posts (){
    const [noticiasTopLine, setNoticiasTopLine] = useState<any>([])

    useEffect(()=>{
     
          api.get('').then((response)=>{
            
            setNoticiasTopLine(response.data.articles)
           console.log(noticiasTopLine);
        }).catch((err)=>console.log('Erro na requisição: ', err))
       

      
        
    },[])
    
    return(
      <Base_first_posts>
        <Base_p_top>
            <div className="content_titles">
                <h1>{noticiasTopLine?.[6].title.length > 25 ? noticiasTopLine?.[6].title.substring(0, 25)+'...' : '' }</h1>
                <p>{noticiasTopLine?.[6].content.length > 150 ? noticiasTopLine?.[6].content.substring(0, 150)+'...' : '' }</p>
                <span className='top_titles_footer'>
                    <span>{moment(noticiasTopLine?.[6].publishedAt).format('[Hoje às ] h:mm a' )}</span>
                    <span><a href={noticiasTopLine?.[6].url}>Read more</a></span>
                </span>
            </div>
            <div className="content_img">
                <img src={noticiasTopLine?.[6].urlToImage}/> 
            </div>
        </Base_p_top>
        <Base_p_inf>
        <div className="content_destaques">
            <div className="img_content">
            <img src={''}/>
            </div>
            <div className="content_headers">
            <h2>sobre tecnologia</h2>
            <p>it is teste etxt meani sobre swdvf</p>
            <span className="inf_titles_footer">
                <span>Data</span>
                <span>Read more</span>
            </span>
            </div>
           
        </div><div className="content_destaques">
            <img src=""/>
            <h2>sobre tecnologia</h2>
            <p>it is teste etxt meani sobre swdvf</p>
            <span className="inf_titles_footer">
                <span>Data</span>
                <span>Read more</span>
            </span>
        </div><div className="content_destaques">
            <img src=""/>
            <h2>sobre tecnologia</h2>
            <p>it is teste etxt meani sobre swdvf</p>
            <span className="inf_titles_footer">
                <span>Data</span>
                <span>Read more</span>
            </span>
        </div>
        </Base_p_inf>
      </Base_first_posts>
    )
}

