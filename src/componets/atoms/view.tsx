import styled from 'styled-components/native';

interface IViewContainer {
    bgColor?: string;
    borderRadius?: string;
    padding?: number;
    width?: string;
    height?: string;
    justifyContent?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
}


const CustomView = styled.View<{props: IViewContainer}>`
background-color: ${(props) => props.bgColor ?? 'transparent'};
border-radius: ${(props) => props.borderRadius ?? '6px'};
padding: ${(props) => props.padding ?? 0}px;
width: ${(props) => props.width ?? '100%'};
height: ${(props) => props.height ?? 'auto'};
display: flex;
padding-top: ${(props) => props.paddingTop ?? 0}px;
padding-bottom: ${(props) => props.paddingBottom ?? 0}px;
padding-left: ${(props) => props.paddingLeft ?? 0}px;
padding-right: ${(props) => props.paddingRight ?? 0}px;
flex-direction: ${(props) => props.flexDirection ?? 'column'};
justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
align-items: ${(props) => props.alignItems ?? 'flex-start'};
`;

export default CustomView;