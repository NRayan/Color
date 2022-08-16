import { transparentize } from "polished";
import styled from "styled-components";
import { props } from ".";

export const Container = styled.button<props>`
    background-color: ${({ selected, theme: { colors } }) => selected ? colors.background : colors.backgroundSecondary};
    color: ${({ selected, theme: { colors } }) => transparentize(selected ? 0 : .4, colors.text)};
    font-weight: ${({ selected }) => selected ? 600 : 500};
    padding: 2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
`;