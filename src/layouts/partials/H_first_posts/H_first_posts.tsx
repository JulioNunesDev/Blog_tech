import {Base_first_posts, Base_p_top, Base_p_inf } from './StyH_first_posts'
import React from 'react'
export default function H_first_posts (){
    return(
      <Base_first_posts>
        <Base_p_top>
            <div className="content_titles">
                <h1>Seja um programador</h1>
                <p>Its texte main desktop top look</p>
                <span className='top_titles_footer'>
                    <span>Data</span>
                    <span>Read more</span>
                </span>
            </div>
            <div className="content_img">
                <img src=""/>
            </div>
        </Base_p_top>
        <Base_p_inf>
        <div className="content_destaques">
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

