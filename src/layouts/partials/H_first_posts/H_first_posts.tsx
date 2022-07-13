
import { useEffect, useState } from 'react'
import React from 'react'
import api from '../../../services/Api'
import {Base_first_posts, Base_p_top, Base_p_inf } from './StyH_first_posts'
import moment from 'moment'

export default function H_first_posts (){
  

    useEffect(()=>{
     
        
    },[])
  
    
    return(
      <Base_first_posts>
        <Base_p_top>
            <div className="content_titles">
                <h1>{}</h1>
                <p>{}</p>
                <span className='top_titles_footer'>
                    <span>{moment().format('[Hoje às ] h:mm a' )}</span>
                    <span><a href={''}>Read more</a></span>
                </span>
            </div>
            <div className="content_img">
                <img src={''}/> 
            </div>
        </Base_p_top>
        <Base_p_inf>
          <div className="content_destaques">
            <div className="img_content">
            <img src={''}/>
            </div>
            <div className="content_headers">
            <h2>{}</h2>
            <p>{}</p>
            <span className="inf_titles_footer">
            <span>{moment().format('[Hoje às ] h:mm a' )}</span>
            <span><a href={''}>Read more</a></span>
            </span>
            </div>
        </div>
        
        </Base_p_inf>
      </Base_first_posts>
    )
}

