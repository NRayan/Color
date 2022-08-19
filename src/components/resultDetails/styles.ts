import styled, { keyframes } from "styled-components";

const animate = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const Detail = styled.details<{ index: number }>`
    opacity: 0;
    margin-top: 2rem;
    align-self: flex-start;
    font-size: 1.4rem;
    animation: ${animate} .2s linear ${({ index }) => index * .5}s forwards;
`;

export const Summary = styled.summary`
    font-weight: 500;
`;

export const DetailText = styled.p`
    margin-top: .5rem;
    font-weight: 300;
    line-height: 2.2rem;
`;