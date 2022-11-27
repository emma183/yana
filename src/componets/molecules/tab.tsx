import React, { memo, useEffect, useState } from "react";
import { TabContainer, TabItem as TabItemCustom } from "../atoms";

const Tab = ({ children, onTabSelected }) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onPress: () => {
            setItemId(index);
          },
          selected: itemId === index
        });
      })}
    </TabContainer>
  );
};

export const TabItem = memo(({ children, ...restProps }) => (
  <TabItemCustom {...restProps}>{children}</TabItemCustom>
));

export default Tab;