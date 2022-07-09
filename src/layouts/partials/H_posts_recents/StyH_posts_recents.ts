import styled, { keyframes } from "styled-components";

interface IProps {
    test: string
    posts: string
    postsTwo: string

}
interface IProp {
    postCapa: string
}


export const Base_Posts_Recents = styled.section`
width: 100%;
height: auto;

background-image: url(${(props:IProp)=>props.postCapa || 'cc'});
display: flex;
justify-content: center;
align-items: center;
padding: 25px 20px;
`

export const Content_Posts_Recents = styled.section`
width: 100%;
max-width: 1400px;
height: auto;
display: flex;
align-items: center;
justify-content: space-around;
padding: 15px 0px;

a{
    color: #fff;
    text-decoration:none;
    transition: all .2s ease-in-out; 
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        transition: all .2s ease-in-out;
    }
}





.post_recents_main{
background-image: url(${(props:IProps)=>props.test || '../../../assets/erro/erro.jpg'});
background-position: center;

background-size: 180%;
background-repeat: no-repeat;

width: 38rem;
height: 28rem;

display: flex;
align-items: flex-end;
justify-content: space-between;
overflow: hidden;

&:hover{
    transition: all .2s ease-in-out;
    background-position: center;
    background-size: 200%;
    background-repeat: no-repeat;
    background-image: url(${(props:IProps)=>props.test || '../../../assets/erro/erro.jpg'});
}

    .post_title{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 14rem;
        align-items: flex-start;
        text-align: left;
        justify-content: center;

        h1{
            color: #fff;
            padding: 15px;
            width: 80%;
            font-size: 30px;
            font-family: var(--font-sansation);
            font-weight: normal;
            margin-bottom: 10px;
        }

        .post_infors{
        
            padding-left: 15px;
            display: flex;
            align-items: center;
            width: 80%;
            gap: 10px;

            p{
            
                color: #fff;
            font-size: 16px;
            font-family: var(--font-sansation);
            font-weight: normal;
            
            }
            img{
                width: 35px;
                height: 35px;
                
                border-radius: 50px;
                object-fit:  cover;
            }
        }

    }         
}

.posts_recents{
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 30rem;  
    justify-content: space-between;
    padding: 10px 0;
    align-items: center;
 
   
   
    .imgOne{
        width: 100%;
        height: 14rem;
       background-size: 100%;
       background-position: center;
      
       background-image: url(${(props:IProps)=>props.posts || '../../../assets/erro/erro.jpg'});
    

        &:hover{
            transition: all .2s ease-in-out;
    background-position: center;
    background-size: 120%;
    background-repeat: no-repeat;
    background-image: url(${(props:IProps)=>props.posts || '../../../assets/erro/erro.jpg'});
        }
    }

    .imgTwo{
        background-image: url(${(props:IProps)=>props.postsTwo || '../../../assets/erro/erro.jpg'});
        width: 100%;
        height: 14rem;
        background-size: 100%;
       background-position: center;
       

        &:hover{
            transition: all .2s ease-in-out;
    background-position: center;
    background-size: 120%;
    background-repeat: no-repeat;
    background-image: url(${(props:IProps)=>props.postsTwo || '../../../assets/erro/erro.jpg'});
        }
    }
    .post_title{
        
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 14rem;
        background-color: var(--color-fundo);
        align-items: flex-start;
        text-align: left;
        justify-content: end;
        padding-bottom: 10px;
       


        h1{
            color: #fff;
            padding: 15px;
            
            width: 80%;
            font-size: 23px;
            font-family: var(--font-sansation);
            font-weight: normal;
            margin-bottom: 10px;
        }

        .post_infors{
        
            padding-left: 15px;
            display: flex;
            align-items: center;
            width: 80%;
           color: #fff;
            gap: 10px;

            p{
     
            font-size: 18px;
            font-family: var(--font-sansation);
            font-weight: normal;
            
            }
            img{
                width: 35px;
                height: 35px;
                background-color: azure;
                border-radius: 50px;
            }
        }

    }         

    .posts{
      
        width: 30rem;
        height: 12rem;  
        background-color: brown;

        
    }

}
@media not screen and (min-width:1040px)  {
    .post_recents_main{
    width: 30rem;
    height: 24rem;
   
}

    .posts_recents{
        display: none;
    }
}

@media not screen and (min-width:495px) and (min-width: 427px) and (min-width:330px)   {
    .post_recents_main{
    width: 20rem;
    height: 24rem;
    
}

    .posts_recents{
        display: none;
    }
}

@media not screen and  (min-width:330px)   {
    .post_recents_main{
    width: 16rem;
    height: 20rem;
   
}
}

`