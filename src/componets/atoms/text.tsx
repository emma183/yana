import styled from 'styled-components/native';

const Text = styled.Text`
    font-size: ${(props) => props.size ?? '16px'};
    font-weight: ${(props) => props.weight ?? 'normal'};
    padding-top: ${(props) => props.paddingTop ?? 0}px;
    padding-bottom: ${(props) => props.paddingBottom ?? 0}px;
    padding-left: ${(props) => props.paddingLeft ?? 0}px;
    padding-right: ${(props) => props.paddingRight ?? 0}px;
    color: ${(props) => props.color ?? '#000'};
`;

export default Text;

