import styled from "styled-components";

export const Container = styled.div`
display: flex;
background-color: red;
background-color: ${({ theme }) => theme.colors.primary};
`;