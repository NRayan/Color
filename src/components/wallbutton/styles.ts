import { transparentize } from "polished";
import styled from "styled-components";
import { props } from ".";

export const Container = styled.button<props & { hasError: boolean }>`
    background-color: ${({ selected, theme: { colors } }) => selected ? colors.background : colors.backgroundSecondary};
    color: ${({ selected, theme: { colors }, hasError }) => hasError ? colors.error : transparentize(selected ? 0 : .4, colors.text)};
    font-weight: ${({ selected }) => selected ? 600 : 500};
    padding: 2rem 0rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
`;