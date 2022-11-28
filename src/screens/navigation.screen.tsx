import React, { useState, useEffect, ReactNode } from 'react';
import { ViewContainer, CustomView} from '../componets/atoms';

import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slice/userSlice';
import Tab, { TabItem } from '../componets/molecules/tab';
import AccountTemplate from '../componets/templates/account';
import ChatTemplate from '../componets/templates/chat';


const NavigationScreen = ({navigation}) => {
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
        setTabSelected(<ChatTemplate />);
        break;
      case 1:
        setTabSelected(<AccountTemplate navigation={navigation}/>);
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