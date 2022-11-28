import styled from 'styled-components/native';

const Input = styled.TextInput`
    background-color: ${(props) => props.styles.backgroundColor ?? '#fff'};
    border-radius: ${(props) => props.styles.borderRadius ?? 6}px;
    padding: ${(props) => props.styles.padding ?? '12px'};
    width: ${(props) => props.styles.width ?? '100%'};
    height: ${(props) => props.styles.height ?? 'auto'};
    display: flex;
    align-items: ${(props) => props.styles.alignItems ?? 'center'};
    justify-content: ${(props) => props.styles.justifyContent ?? 'center'};
    font-size: ${(props) => props.styles.fontSize ?? '16px'};
    color: ${(props) => props.styles.color ?? '#000'};
    font-weight: ${(props) => props.styles.fontWeight ?? 'normal'};
    padding-top: ${(props) => props.styles.paddingTop ?? 0}px;
    padding-bottom: ${(props) => props.styles.paddingBottom ?? 0}px;
    padding-left: ${(props) => props.styles.paddingLeft ?? 24}px;
    padding-right: ${(props) => props.styles.paddingRight ?? 0}px;
    margin-left: ${(props) => props.styles.marginLeft ?? 0}px;
    margin-right: ${(props) => props.styles.marginRight ?? 0}px;
    margin-top: ${(props) => props.styles.marginTop ?? 0}px;
    margin-bottom: ${(props) => props.styles.marginBottom ?? 0}px;
    box-shadow: ${(props) => props.styles.boxShadow ?? 'none'};
    type: ${(props) => props.type ?? 'text'};
`;

export default Input;