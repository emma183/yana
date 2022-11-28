import styled from 'styled-components/native';

interface IText {
    size?: string;
    weight?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    color?: string;
}

const Text = styled.Text<{props: IText}>`
    font-size: ${(props) => props.size ?? '16px'};
    font-weight: ${(props) => props.weight ?? 'normal'};
    padding-top: ${(props) => props.paddingTop ?? 0}px;
    padding-bottom: ${(props) => props.paddingBottom ?? 0}px;
    padding-left: ${(props) => props.paddingLeft ?? 0}px;
    padding-right: ${(props) => props.paddingRight ?? 0}px;
    margin-top: ${(props) => props.marginTop ?? 0}px;
    color: ${(props) => props.color ?? '#000'};
`;

export default Text;

