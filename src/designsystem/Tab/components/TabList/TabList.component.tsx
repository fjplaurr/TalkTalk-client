import React from 'react';
import Tab from './components/Tab';
import Themes from '../../../themes';
import Box from '../../../Box';

type TabListProps = {
  tabs: { title: string; id: string }[];
  onClickTab: (id: string | number) => void;
  selectedIdTab: string | number;
};

const TabList = ({ tabs, onClickTab, selectedIdTab }: TabListProps) => (
  <Box $justifyContent="center" $display="flex" $gap={Themes.setSpace(16)}>
    {tabs.map((tab) => (
      <Tab
        title={tab.title}
        key={tab.id}
        onClick={() => onClickTab?.(tab.id)}
        $variant={selectedIdTab === tab.id ? 'selected' : 'default'}
      />
    ))}
  </Box>
);

export default TabList;
