import styled from "styled-components";

export const Container = styled.div<{ visible: boolean }>`
    flex: 1;    
    row-gap: 2rem;
    display: ${({ visible }) => visible ? "flex" : "none"};
`;

export const ErrorLabel = styled.label`
    color: ${({ theme }) => theme.colors.error};
    font-weight: 500;
    font-size: 1.3rem;
    white-space: pre-wrap;
`;