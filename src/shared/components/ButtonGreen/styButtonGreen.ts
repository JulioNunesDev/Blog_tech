import styled from "styled-components";
import IProps from '../interfaces/interfaces'
import IPadProps from '../interfaces/interfaces'

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${(props: IProps) => props.position || undefined};
    background-color: transparent;
`
export const Ctx_Button= styled.button`
    padding: ${(props: IPadProps) => props.topPadding || '10px'} ${(props: IPadProps) => props.rationPadding || '70px'};
    background-color: red;
    border-radius: 10px;
    border: 0;
    background-color: ${(props: IPadProps) => props.backGround || 'var(--color-verde)'};
    cursor: pointer;
    font-size: 22px;
    font-family: var(--font-sansation);
    font-weight: 700;
    color: #fff;
`