import H_first_posts from '../../layouts/partials/H_first_posts/H_first_posts'
import H_Posts_Recents from "../../layouts/partials/H_posts_recents/H_posts_recents"
import { Content_Home } from "./StyHome"


const Home = ( ) =>{
    return(
        <Content_Home>
            <H_Posts_Recents />
            <H_first_posts />
        </Content_Home>
    )
}

export default Home