import styled from 'styled-components/native';

interface ITextByChat {
    size?: string;
    weight?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    marginTop?: number;
    color?: string;
    bgColor?: string;
}

const TextByChat = styled.Text<{props: ITextByChat}>`
    font-size: ${(props) => props.size ?? '14px'};
    font-weight: ${(props) => props.weight ?? 'normal'};
    padding-top: ${(props) => props.paddingTop ?? 8}px;
    padding-bottom: ${(props) => props.paddingBottom ?? 8}px;
    padding-left: ${(props) => props.paddingLeft ?? 16}px;
    padding-right: ${(props) => props.paddingRight ?? 16}px;
    border-radius: 20px;
    margin-top: ${(props) => props.marginTop ?? 8}px;
    color: ${(props) => props.color ?? '#000'};
    background-color: ${(props) => props.bgColor ?? 'transparent'};
`;

export default TextByChat;