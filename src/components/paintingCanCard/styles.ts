import styled from "styled-components";

export const Container = styled.div`
align-self: flex-start;
flex-direction: row;
border: 1px solid ${({ theme }) => theme.colors.text};
border-radius: 10px;
padding: 1rem 2rem;
`;

export const Label = styled.label`
    font-size: 1.8rem;
    font-weight: 500;
`;

export const CardsContainer = styled.div`
    row-gap: 1rem;
`;