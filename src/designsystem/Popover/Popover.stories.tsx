import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Popover from './index';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'Popover',
  component: Popover,
  argTypes,
} as ComponentMeta<typeof Popover>;

export const ClickPopover: ComponentStory<typeof Popover> = () => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const handleClick = () => {
    setOpenPopover(true);
  };

  const popoverClickTrigger = <button onClick={handleClick}>Open here</button>;

  const popoverContent = <div>You opened the Popover!</div>;

  return (
    <Popover
      isOpen={openPopover}
      setIsOpen={setOpenPopover}
      popoverTrigger={popoverClickTrigger}
      popoverContent={popoverContent}
      $width="500px"
    />
  );
};

export const ChangePopover: ComponentStory<typeof Popover> = () => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      setOpenPopover(true);
    } else {
      setOpenPopover(false);
    }
  };

  const popoverChangeTrigger = <input type="text" onChange={handleChange} />;

  const popoverContent = <div>You opened the Popover!</div>;

  return (
    <Popover
      isOpen={openPopover}
      setIsOpen={setOpenPopover}
      popoverTrigger={popoverChangeTrigger}
      popoverContent={popoverContent}
      $width="500px"
    />
  );
};
