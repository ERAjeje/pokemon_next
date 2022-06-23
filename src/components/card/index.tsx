import styled from 'styled-components'

export const Card = styled.div`
    width: 40%;
    height: 50vh;
    border: 0.5px solid rgba(0,0,0,0.5);
    border-radius: 15px;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.5);
    background-color: white;
    color: black;
    text-align: center;
    margin-top: 35px;
`;

export const CardTitle = styled.h2`
    font-size: 35px;
    font-weight: 600;
`;

export const CardSubtitle = styled.h3`
    font-size: 23px;
    font-weight: 400;
`;

export const CardSpan = styled.span`
    font-size: 22px;
    font-weight: 300;
`;

export const CardRow = styled.div<{height?: string}>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: calc(100% - 30px);
    height: ${props => props.height || 'auto'};
    padding: 10px 15px;
`;

export const CardCol = styled.div<{size: number}>`
    flex-direction: column;
    width: ${props => props.size ? (100 / props.size) : 100}%;
`;