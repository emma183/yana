import styled from 'styled-components/native';

const ViewContainer = styled.View<{bgColor: string; padding: number}>`
    background-color: ${(props) => props.bgColor ?? 'transparent'};
    border-radius: 6px;
    padding: ${(props) => props.padding ?? 0}px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
`;

export default ViewContainer;