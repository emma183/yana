import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableHighlight`
    background-color: ${(props) => props.bgColor ?? '#000'};
    border-radius: ${(props) => props.borderRadius ?? 6}px;
    padding: ${(props) => props.padding ?? '12px'};
    width: ${(props) => props.width ?? 'auto'};
    height: ${(props) => props.height ?? 'auto'};
    margin-top: ${(props) => props.marginTop ?? 0}px;
    margin-bottom: ${(props) => props.marginBottom ?? 0}px;
    margin-left: ${(props) => props.marginLeft ?? 0}px;
    margin-right: ${(props) => props.marginRight ?? 0}px;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ButtonContainer;