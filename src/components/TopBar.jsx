/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TopBar = () => {
  return (
    <div css={topBarContainerStyles}>
      <div css={topBarStyles}>
        <div css={leadingIconStyles}>
          <div css={iconContainerStyles}>
            <div css={stateLayerStyles}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7463ce3cb73e45849dff91794e949928/6aa47febde37580ceb2484f59103748f4cf6b17d?placeholderIfAbsent=true"
                css={iconImageStyles}
                alt="Menu"
              />
            </div>
          </div>
        </div>
        <div css={headlineStyles}>Ona Dashboard</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7463ce3cb73e45849dff91794e949928/ebe5ec6749d96a1f04824269049909630cdd2d2c?placeholderIfAbsent=true"
          css={profileImageStyles}
          alt="Profile"
        />
      </div>
      <div css={subHeadlineStyles}>All Trials</div>
    </div>
  );
};

const topBarContainerStyles = css`
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const topBarStyles = css`
  background-color: rgba(64, 24, 5, 1);
  display: flex;
  min-height: 56px;
  width: 100%;
  padding: 4px 24px;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 8px 16px;
    gap: 16px;
    min-height: 64px;
  }
  @media (max-width: 480px) {
    padding: 8px 12px;
    gap: 12px;
    min-height: 60px;
  }
`;

const leadingIconStyles = css`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  min-height: 48px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  @media (max-width: 480px) {
    width: 40px;
    min-height: 40px;
  }
`;

const iconContainerStyles = css`
  border-radius: 100px;
  display: flex;
  width: 100%;
  max-width: 40px;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  justify-content: center;
`;

const stateLayerStyles = css`
  align-self: stretch;
  display: flex;
  margin: auto 0;
  width: 40px;
  padding: 8px;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

const iconImageStyles = css`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

const headlineStyles = css`
  color: #fffcfa;
  font-family:
    "TT Firs Neue Trial Var Roman",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  align-self: stretch;
  margin: auto 0;
  flex: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 20px;
    line-height: 26px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const profileImageStyles = css`
  aspect-ratio: 5/6;
  object-fit: contain;
  object-position: center;
  width: 30px;
  fill: #f9eae2;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 26px;
  }
`;

const subHeadlineStyles = css`
  font-size: 22px;
  line-height: 1;
  letter-spacing: 0px;
  align-self: stretch;
  width: 100%;
  min-height: 56px;
  padding: 14px 48px;
  gap: 24px;
  font-family:
    "TT Firs Neue Trial Var Roman",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  color: #1d2433;
  font-weight: 500;
  background-color: #fffaf6;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 16px 20px;
    font-size: 20px;
    min-height: 52px;
  }
  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 18px;
    min-height: 48px;
  }
`;

export default TopBar;
