import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableHighlight`
    background-color: ${(props) => props.bgColor ?? '#000'};
    border-radius: ${(props) => props.borderRadius ?? '6px'};
    padding: ${(props) => props.padding ?? '12px'};
    width: ${(props) => props.width ?? 'auto'};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ButtonContainer;