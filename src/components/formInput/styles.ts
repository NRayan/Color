import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    row-gap: .4rem;
`;
export const Label = styled.label`
    font-size: 1.4rem;
    font-weight: 500;
`;

export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid ${({ theme }) => transparentize(.7, theme.colors.text)};
    padding: .7rem .5rem;
    font-size: 1.4rem;
`;