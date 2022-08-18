import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    width: 45rem;
    border: 1px solid ${({ theme }) => transparentize(.5, theme.colors.text)};
`;

export const Header = styled.header`
    display: flex;    
`;

export const ContentContainer = styled.div`
    padding: 5%;
    row-gap: 3rem;
`;