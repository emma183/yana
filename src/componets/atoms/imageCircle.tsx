import styled from 'styled-components/native';

const ImageCircule = styled.Image`
    width: ${(props) => props.width ?? '100px'};
    height: ${(props) => props.height ?? '100px'};
    border-radius: ${(props) => props.borderRadius ?? '50px'};
    margin-top: ${(props) => props.marginTop ?? 0}px;
    margin-bottom: ${(props) => props.marginBottom ?? 0}px;
    margin-left: ${(props) => props.marginLeft ?? 0}px;
    margin-right: ${(props) => props.marginRight ?? 0}px;
`;

export default ImageCircule;