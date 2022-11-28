import styled from 'styled-components/native';

interface IViewContainer {
    bgColor?: string;
    padding?: number;
    justifyContent?: string;
}

const ViewContainer = styled.View<{props: IViewContainer}>`
    background-color: ${(props) => props.bgColor ?? 'transparent'};
    border-radius: 6px;
    padding: ${(props) => props.padding ?? 0}px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
`;

export default ViewContainer;