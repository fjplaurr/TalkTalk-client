import React, { useState } from 'react';
import styles from './TabList.module.css';
import Tab from '../Tab';

type TabListProps = {
  tabs: { title: string; id: string }[];
};

const TabList = ({ tabs }: TabListProps) => {
  const [selectedIdTab, setSelectedIdTab] = useState(tabs[0].id);

  return (
    <div className={styles.base}>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          onClick={() => setSelectedIdTab(tab.id)}
          variant={selectedIdTab === tab.id ? 'selected' : 'default'}
        >
          {tab.title}
        </Tab>
      ))}
    </div>
  );
};

export default TabList;
