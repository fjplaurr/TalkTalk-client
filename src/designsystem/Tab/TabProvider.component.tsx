import React, { useState } from 'react';
import TabList from './components/TabList';
import TabPanel from './components/TabPanel';
import Box from '../Box/Box.component';

type TabProviderProps = {
  tabs: { title: string; id: string; content: React.ReactNode }[];
};

const TabProvider = ({ tabs }: TabProviderProps) => {
  const [selectedIdTab, setSelectedIdTab] = useState<string | number>(
    tabs[0].id,
  );

  const contentToShow = tabs.find((el) => el.id === selectedIdTab)!.content;

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TabList
        tabs={tabs}
        selectedIdTab={selectedIdTab}
        onClickTab={(id: string | number) => setSelectedIdTab(id)}
      />
      <TabPanel>{contentToShow}</TabPanel>
    </Box>
  );
};

export default TabProvider;
