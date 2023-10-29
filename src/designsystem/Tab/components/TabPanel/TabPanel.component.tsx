import React from 'react';
import Box from '../../../Box';
import Themes from '../../../themes';

type TabPanelProps = {
  children: React.ReactNode;
};

const TabPanel = ({ children }: TabPanelProps) => (
  <Box $mt={Themes.setSpace(20)}>{children}</Box>
);

export default TabPanel;
