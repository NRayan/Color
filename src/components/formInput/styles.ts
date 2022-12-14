import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    row-gap: .4rem;
`;

export const LabelContainer = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    column-gap: 5rem;
`;

export const Label = styled.label`
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    flex: 1;
`;

export const ErrorLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.error};
    display: flex;
    text-align: end;
    white-space: pre-wrap;
`;

export const Input = styled.input<{ hasError: boolean }>`
    border-radius: 5px;
    border: 1px solid ${({ theme: { colors }, hasError }) => hasError ? colors.error : transparentize(.7, colors.text)};
    padding: .7rem .5rem;
    font-size: 1.4rem;
`;