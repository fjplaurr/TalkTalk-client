import React, { FocusEvent } from 'react';
import styled from 'styled-components';
import { Theme, Box } from '../index';

type PopoverProps = {
  popoverContent: React.ReactNode;
  popoverTrigger: React.ReactNode;
  setIsOpen: any;
  isOpen: boolean;
  $width?: React.CSSProperties['width'];
  $top?: React.CSSProperties['top'];
  $right?: React.CSSProperties['right'];
  $bottom?: React.CSSProperties['bottom'];
  $left?: React.CSSProperties['left'];
};

const PopoverContainer = styled(Box)`
  &:focus {
    outline: none;
  }
`;

const Popover = ({
  popoverContent,
  setIsOpen,
  isOpen = false,
  popoverTrigger,
  $width,
  $top,
  $right,
  $bottom,
  $left,
}: PopoverProps) => {
  const containerRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (isOpen) {
      containerRef.current.focus();
    }
  }, [isOpen]);

  const handleBlur = (event: FocusEvent) => {
    if (!containerRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {popoverTrigger}
      {isOpen && (
        <PopoverContainer
          $display="flex"
          $gap={Theme.setSpace(16)}
          $flexDirection="column"
          $pt={`min(4vw, ${Theme.setSpace(16)})`}
          $pr={`min(4vw, ${Theme.setSpace(16)})`}
          $pb={`min(4vw, ${Theme.setSpace(12)})`}
          $pl={`min(4vw, ${Theme.setSpace(12)})`}
          $border={`1px solid ${Theme.colors.darkGray}`}
          $borderRadius={`calc(${Theme.minimumBorderRadius} * 2)`}
          $position="absolute"
          $width={$width}
          $top={$top}
          $right={$right}
          $bottom={$bottom}
          $left={$left}
          $backgroundColor="white"
          $zIndex={1}
          tabIndex={0}
          onBlur={(event) => handleBlur(event)}
          onFocus={() => setIsOpen(true)}
          ref={containerRef}
        >
          {popoverContent}
        </PopoverContainer>
      )}
    </div>
  );
};

export default Popover;
