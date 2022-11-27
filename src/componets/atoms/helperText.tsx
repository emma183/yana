import styled from 'styled-components/native';

const HelperText = styled.Text`
    font-size: ${(props) => props.size ?? 10}px;
    font-weight: ${(props) => props.weight ?? 'normal'};
    padding-top: ${(props) => props.paddingTop ?? 0}px;
    padding-bottom: ${(props) => props.paddingBottom ?? 0}px;
    margin-bottom: ${(props) => props.marginBottom ?? 10}px;
    color: ${(props) => props.color ?? 'red'};
`;

export default HelperText;

