import styled from "styled-components";

export const Base_first_posts = styled.section`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    padding: 50px;
`

export const Base_p_top = styled.div`
    margin-bottom: 25px;
    width: 966px;
    height: 220px;
    display: flex;
    justify-content: space-around;
    border: 1px solid #E2E2E2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 1px 6px 25px 1px rgba(0, 0, 0, 0.3);

    .content_titles{
        text-align: left;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
       padding-left: 15px;
       border-top-left-radius: 8px;
       border-bottom-left-radius: 8px;
     

        .top_titles_footer{
          
            width: 100%;
            justify-content: space-around;
            display: flex;
            padding: 0 10px;
            align-items: flex-end;
            margin-top: 25px;

            span{
                font-family: var(--font-sansation);
                font-weight: 400px;

                a{
                    text-decoration: none;
                    color: black;
                    transition: 0.2s ease-in;

                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }

        h1{
            font-family: var(--font-sansation);
            font-size: 30px;
          
        }
        p{
            font-family: var(--font-sansation);
            margin-top: 10px;
        }

    }
    .content_img{
        width: 50%;
        height: 100%;
        background-color: yellow;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const Base_p_inf = styled.div`
width: 966px;
height: 382px;
background-color: brown;
display: flex;
justify-content: space-around;
gap: 10px;

.content_destaques{
    height: 100%;
    width: 312px;
    background-color: blueviolet;

    .img_content{
        width: 100%;
        background-color: black;
        height:50%;

        img{
            width: 100%;
            height: 100%;
        }
    }
    .content_headers{
        width: 100%;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        h2{
        font-family: var(--font-sansation);
            font-size: 24px;
    }
    p{
        font-family: var(--font-sansation);
            font-size: 16px;
    }
    .inf_titles_footer{
        background-color: blue;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 25px 0 0;
        
    }
    }
   
}
`