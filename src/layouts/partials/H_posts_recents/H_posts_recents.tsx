import { Base_Posts_Recents, Content_Posts_Recents } from "./StyH_posts_recents"

const H_Posts_Recents = () =>{
    return(
        <Base_Posts_Recents>
            <Content_Posts_Recents>
            <div className="post_recents_main">
                <div className="post_title">
                    <h1>tesrtando leganda da api de noticia</h1>
                    <span className="post_infors">
                        <p>Author •</p>
                        <span className="post_infors_date"><p>Hoario</p></span>
                    </span>
                    </div>
            </div>
            <div className="posts_recents">
            <div className="posts">
                 <div className="post_title">
                    <h1>tesrtando leganda da api de noticia</h1>
                    <span className="post_infors">
                        <p>Author •</p>
                        <span className="post_infors_date"><p>Hoario</p></span>
                    </span>
                    </div>
            </div>
            <div className="posts">
            <div className="post_title">
                    <h1>tesrtando leganda da api de noticia</h1>
                    <span className="post_infors">
                        <p>Author •</p>
                        <span className="post_infors_date"><p>Hoario</p></span>
                    </span>
                    </div>
            </div>
            </div>
            </Content_Posts_Recents>
        </Base_Posts_Recents>
    )
}


export default H_Posts_Recents