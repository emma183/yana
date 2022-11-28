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


const ScrollView = styled.ScrollView.attrs({
    contentContainerStyle: props => {
      return {
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  })``

export default ScrollView;