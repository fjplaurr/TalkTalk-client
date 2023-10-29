import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Themes from '../themes';

type TextAreaProps = {
  onSend?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  width?: React.CSSProperties['width'];
  resize?: React.CSSProperties['resize'];
};

const StyledTextArea = styled.textarea<{ resize: TextAreaProps['resize'] }>`
  font-size: ${Themes.fontSizes.regular};
  line-height: ${Themes.lineHeights.regular};
  font-weight: ${Themes.fontWeights.regular};
  resize: ${({ resize }) => resize};
  width: 100%;
  height: 100%;
  border: none;
  outline: none;

  &::placeholder {
    color: ${Themes.colors.darkGray};
  }
`;

const StyledContainer = styled.div<{ width: React.CSSProperties['width'] }>`
  border-radius: calc(${Themes.minimumBorderRadius} * 2);
  border: 1px solid ${Themes.colors.darkGray};
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
  padding-top: calc(${Themes.minimumSpacing} * 3);
  padding-bottom: calc(${Themes.minimumSpacing} * 3);
  padding-left: calc(${Themes.minimumSpacing} * 3);
  padding-right: calc(${Themes.minimumSpacing} * 3);
  width: ${({ width }) => width};

  &:has(textarea:focus) {
    border: 1px solid ${Themes.colors.midBlue};
    outline: 1px solid ${Themes.colors.midBlue};
  }
`;

const ButtonWrapper = styled.div`
  margin-left: calc(${Themes.minimumSpacing} * 3);
`;

const TextArea = ({
  onChange,
  onSend,
  placeholder,
  width,
  resize = 'vertical',
}: TextAreaProps) => {
  const hasSubmitButton = Boolean(onSend);
  return (
    <StyledContainer width={width}>
      <StyledTextArea
        onChange={onChange}
        placeholder={placeholder}
        resize={resize}
      />
      {hasSubmitButton && (
        <ButtonWrapper>
          <Button $variant="primary" onClick={onSend}>
            Button
          </Button>
        </ButtonWrapper>
      )}
    </StyledContainer>
  );
};

export default TextArea;
