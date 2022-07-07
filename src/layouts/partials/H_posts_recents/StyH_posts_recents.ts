import styled from "styled-components";


export const Base_Posts_Recents = styled.section`
width: 100%;
height: 100%;
background-color: var(--color-fundo2);
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
`

export const Content_Posts_Recents = styled.section`
width: 100%;
max-width: 1400px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;
padding: 15px 0px;
background-color: #fff;




.post_recents_main{
background-color: blanchedalmond;
width: 38rem;
height: 28rem;
background-color: var(--color-fundo);
display: flex;
align-items: flex-end;
justify-content: space-between;


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
            font-size: 20px;
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
}

.posts_recents{
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 30rem;  
    background-color: black;
    justify-content: space-between;
    align-items: center;
   
    .post_title{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 14rem;
        background-color: var(--color-fundo);
        align-items: flex-start;
        text-align: left;
        justify-content: center;

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
    background-color: blue;
}

    .posts_recents{
        display: none;
    }
}

@media not screen and (min-width:495px) and (min-width: 427px) and (min-width:330px)   {
    .post_recents_main{
    width: 20rem;
    height: 24rem;
    background-color: blue;
}

    .posts_recents{
        display: none;
    }
}

@media not screen and  (min-width:330px)   {
    .post_recents_main{
    width: 16rem;
    height: 20rem;
    background-color: blue;
}
}

`