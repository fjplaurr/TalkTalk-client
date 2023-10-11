import React from 'react';
import Tab from './components/Tab';
import Box from '../../../Box';
import { setSpace } from '../../../themes';

type TabListProps = {
  tabs: { title: string; id: string }[];
  onClickTab: (id: string | number) => void;
  selectedIdTab: string | number;
};

const TabList = ({ tabs, onClickTab, selectedIdTab }: TabListProps) => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="flex-start"
    gap={setSpace(16)}
    noBorder
  >
    {tabs.map((tab) => (
      <Tab
        title={tab.title}
        key={tab.id}
        onClick={() => onClickTab?.(tab.id)}
        variant={selectedIdTab === tab.id ? 'selected' : 'default'}
      />
    ))}
  </Box>
);

export default TabList;
