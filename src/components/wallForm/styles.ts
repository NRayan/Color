import styled from "styled-components";

export const Container = styled.div<{ visible: boolean }>`
    flex: 1;    
    row-gap: 2rem;
    display: ${({ visible }) => visible ? "flex" : "none"};
`;