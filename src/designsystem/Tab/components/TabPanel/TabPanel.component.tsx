import React from 'react';
import Box from '../../../Box';

type TabPanelProps = {
  children: React.ReactNode;
};

const TabPanel = ({ children }: TabPanelProps) => (
  <Box noBorder mt="20px">
    {children}
  </Box>
);

export default TabPanel;
