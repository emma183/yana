import React, { useState, useEffect, ReactNode } from 'react';
import { Text, ViewContainer, CustomView} from '../componets/atoms';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/slides/userSlide';
import Tab, { TabItem } from '../componets/molecules/tab';
import AccountTemplate from '../componets/templates/account';


const NavigationScreen = () => {
  const user = useSelector(selectUser)
  const [tabSelectedNumber, setTabSelectedNumber] = useState<number | null>(null);
  const [tabSelected, setTabSelected] = useState<ReactNode | null>(null);

  const onTabSelected = (index) => {
    if(tabSelectedNumber === index)return;
    setTabSelectedNumber(index);
  };

  useEffect(() => {
    switch (tabSelectedNumber) {
      case 0:
        setTabSelected(<Text>chat</Text>);
        break;
      case 1:
        setTabSelected(<AccountTemplate/>);
        break;
    }
  }, [tabSelectedNumber]);
 

  return (
    <ViewContainer bgColor={'white'} padding={12}>
      <CustomView
        paddingTop={48}
        justifyContent='center'
        alignItems='center' 
        >
          <Tab onTabSelected={onTabSelected}>
            <TabItem>Chat</TabItem>
            <TabItem>Cuenta</TabItem>
          </Tab>
      </CustomView>
      {tabSelected}
    </ViewContainer>
  );
};


export default NavigationScreen;