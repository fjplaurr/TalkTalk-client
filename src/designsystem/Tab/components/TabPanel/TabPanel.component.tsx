import React from 'react';
import Box from '../../../Box';
import { setSpace } from '../../../themes';

type TabPanelProps = {
  children: React.ReactNode;
};

const TabPanel = ({ children }: TabPanelProps) => (
  <Box noBorder mt={setSpace(20)}>
    {children}
  </Box>
);

export default TabPanel;
