import React from 'react';
import styled from 'styled-components';
import Icons from '../Icons';
import Themes from '../themes';
import Text from '../Text';

type TextInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  errorMessage?: string;
  showSearchIcon?: boolean;
  $width?: React.CSSProperties['width'];
  value?: string;
  dataTestId?: string;
};

const StyledContainer = styled.div<{ $width?: TextInputProps['$width'] }>`
  position: relative;
  align-items: center;
  display: inline-flex;
  width: ${({ $width }) => $width && $width};
`;

const StyledInput = styled.input<{
  $hasError: boolean;
  $hasIcon: boolean;
}>`
  border-radius: calc(${Themes.minimumBorderRadius} * 2);
  border: ${({ $hasError }) =>
    `1px solid ${$hasError ? Themes.colors.midRed : Themes.colors.darkGray}`};
  padding: calc(${Themes.minimumSpacing} * 2);
  font-size: ${Themes.fontSizes.regular};
  line-height: ${Themes.lineHeights.regular};
  font-weight: ${Themes.fontWeights.regular};
  width: 100%;

  &::placeholder {
    color: ${Themes.colors.darkGray};
  }

  &:focus {
    border: ${({ $hasError }) =>
      `1px solid ${$hasError ? Themes.colors.darkRed : Themes.colors.midBlue}`};
    outline: ${({ $hasError }) =>
      `1px solid ${$hasError ? Themes.colors.darkRed : Themes.colors.midBlue}`};
  }

  padding-left: ${({ $hasIcon }) =>
    $hasIcon && `calc(${Themes.minimumSpacing} * 10)`};
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  margin-left: calc(${Themes.minimumSpacing} * 2);
`;

const TextInput = React.forwardRef(
  (
    {
      onChange,
      name,
      type,
      placeholder,
      errorMessage,
      showSearchIcon,
      $width,
      value,
      dataTestId,
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>,
  ) => (
    <>
      <StyledContainer $width={$width}>
        {showSearchIcon && (
          <StyledIconWrapper>
            <Icons.SearchIcon />
          </StyledIconWrapper>
        )}
        <StyledInput
          onChange={onChange}
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          $hasError={!!errorMessage}
          $hasIcon={!!showSearchIcon}
          value={value}
          data-testid={dataTestId}
        />
      </StyledContainer>
      {errorMessage && (
        <Text color="darkRed" fontSize="regular" fontWeight="regular">
          {errorMessage}
        </Text>
      )}
    </>
  ),
);

export default TextInput;
