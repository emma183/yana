import styled from 'styled-components/native';

const ScrollView = styled.ScrollView.attrs({
    contentContainerStyle: props => {
      return {
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
  })``

export default ScrollView;