/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FilterSection = () => {
  return (
    <div css={filterContainerStyles}>
      <div css={locationsDropdownStyles}>
        <div css={dropdownContentStyles}>
          <div css={dropdownLabelStyles}>
            <div css={labelTextStyles}>Select Location</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7463ce3cb73e45849dff91794e949928/a3ebe1a6c0acc60c6f37e01a81b92e55b1b74ba3?placeholderIfAbsent=true"
              css={dropdownIconStyles}
              alt="Dropdown"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const filterContainerStyles = css`
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  padding: 16px 64px;
  align-items: flex-start;
  gap: 31px;
  font-family:
    "Poppins",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: #401805;
  font-weight: 400;
  justify-content: flex-start;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 16px 20px;
    flex-direction: column;
    gap: 16px;
  }
  @media (max-width: 480px) {
    padding: 12px 16px;
    gap: 12px;
  }
`;

const locationsDropdownStyles = css`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  overflow: hidden;
  justify-content: flex-start;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const dropdownContentStyles = css`
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid #f9eae2;
  display: flex;
  min-height: 48px;
  padding: 12px 24px;
  gap: 8px;
  justify-content: flex-start;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #401805;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 991px) {
    padding: 14px 20px;
    width: 100%;
    min-height: 52px;
  }
  @media (max-width: 480px) {
    padding: 12px 16px;
    min-height: 48px;
    border-radius: 12px;
  }
`;

const dropdownLabelStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
`;

const labelTextStyles = css`
  color: #401805;
  align-self: stretch;
  margin: auto 0;
`;

const dropdownIconStyles = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
`;

export default FilterSection;
