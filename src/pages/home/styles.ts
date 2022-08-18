import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    padding: 3% 10%;
    max-width: 1980px;
    width: 100%;
    align-self: center;
`;

export const Logo = styled.img`
    align-self: flex-end;
    height: 3rem;
    width: 3rem;
`;

export const TitleContainer = styled.div`
    align-self: center;
    align-items: center;
    margin-bottom: 4rem;
`;

export const Title = styled.h1`
    font-size: 3.6rem;
    font-weight: 600;
`;

export const Subtitle = styled.p`
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => transparentize(.2, theme.colors.text)};
    text-align: center;
`;



export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;