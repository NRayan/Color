import styled from "styled-components";

export const Container = styled.button`
    align-self: flex-end;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5rem;
    padding: 1rem 2.5rem;
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
`;