/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Popover from './index';
import Box from '../Box';
import Text from '../Text';
import Avatar from '../Avatar';
import Themes from '../themes';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'Popover',
  component: Popover,
  argTypes,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = () => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const handleClick = () => {
    console.log('clicking');
    setOpenPopover((o) => !o);
  };

  const popoverTrigger = <button onClick={handleClick}>Open here</button>;

  const popoverContent = (
    <>
      <div>You opened the Popover!</div>
      <input placeholder="This is an input" />
    </>
  );

  return (
    <div>
      <Popover
        isOpen={openPopover}
        setIsOpen={setOpenPopover}
        popoverTrigger={popoverTrigger}
        popoverContent={popoverContent}
        $width="500px"
      />
    </div>
  );
};

export const Default = Template.bind({});
