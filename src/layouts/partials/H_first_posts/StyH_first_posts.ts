import styled from "styled-components";

export const Base_first_posts = styled.section`
    width: 100%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Base_p_top = styled.div`
    width: 966px;
    height: 220px;
    background-color: blue;
    .content_titles{
        text-align: left;
        width: 50%;
        height: 100%;
        background-color: aquamarine;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
        .top_titles_footer{
            background-color: beige;
            width: 100%;
            justify-content: space-around;
            display: flex;
            padding: 0 10px;
            align-items: flex-end;
            margin-top: 25px;

            span{
                font-family: var(--font-sansation);
                font-weight: 400px;
            }
        }

        h1{
            font-family: var(--font-sansation);
            font-size: 35px;
        }
        p{
            font-family: var(--font-sansation);
            text-align: left;
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
}
`