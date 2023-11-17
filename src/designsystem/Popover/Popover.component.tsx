import React from 'react';
import { Theme, Box } from '../index';

type PopoverProps = {
  popoverContent: React.ReactNode;
  popoverTrigger: React.ReactNode;
  $width?: React.CSSProperties['width'];
  $top?: React.CSSProperties['top'];
  $right?: React.CSSProperties['right'];
  $bottom?: React.CSSProperties['bottom'];
  $left?: React.CSSProperties['left'];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popover = ({
  popoverContent,
  popoverTrigger,
  $width,
  $top,
  $right,
  $bottom,
  $left,
  isOpen = false,
  setIsOpen,
}: PopoverProps) => {
  const containerRef = React.useRef<any>(null);
  const triggerRef = React.useRef<any>(null);

  React.useEffect(() => {
    const callback = (event: MouseEvent) => {
      const hasClickedOutside = !containerRef?.current?.contains(event.target);
      const hasClickedTrigger = triggerRef?.current?.contains(event.target);

      if (hasClickedOutside && !hasClickedTrigger) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', callback);

    return () => document.removeEventListener('click', callback);
  }, [isOpen]);

  return (
    <Box>
      <Box ref={triggerRef}>{popoverTrigger}</Box>
      {isOpen && (
        <Box
          $display="flex"
          $gap={Theme.setSpace(16)}
          $flexDirection="column"
          $pt={`min(4vw, ${Theme.setSpace(16)})`}
          $pr={`min(4vw, ${Theme.setSpace(16)})`}
          $pb={`min(4vw, ${Theme.setSpace(12)})`}
          $pl={`min(4vw, ${Theme.setSpace(12)})`}
          $mt={`min(4vw, ${Theme.setSpace(4)})`}
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
          ref={containerRef}
        >
          {popoverContent}
        </Box>
      )}
    </Box>
  );
};

export default Popover;
