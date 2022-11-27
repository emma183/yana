import styled from "styled-components";

const selectedColor = "#FF8755";
const defaultColor = "#000000";

const TabItem = styled.Text`
  background-color: white;
  width: 50%;
  padding: 10px;
  transition: 0.3s;
  color: ${(props) => (props.selected ? selectedColor : defaultColor)};
  font-weight: 700;
  font-size: 16px;
  border-bottom-width: ${(props) => (props.selected ? "3px" : "0px")};
  border-bottom-color: ${(props) => (props.selected ? selectedColor : "white")};
  text-align: center;
`;

export default TabItem;