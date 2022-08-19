import styled, { keyframes } from "styled-components";

const animate = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const Container = styled.div<{ index: number }>`
flex-direction: row;
border: 1px solid ${({ theme }) => theme.colors.text};
border-radius: 10px;
padding: 1rem 2rem;
opacity: 0;
animation: ${animate} .5s linear ${({ index }) => index * .5}s forwards;
`;


export const Label = styled.label`
    font-size: 1.8rem;
    font-weight: 500;
`;