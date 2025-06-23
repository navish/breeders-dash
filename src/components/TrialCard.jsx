/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TrialCard = ({ trialName, site, location, status, onClick }) => {
  return (
    <div css={trialCardStyles} onClick={onClick}>
      <div css={cardContentStyles}>
        <div css={trialNameStyles}>{trialName}</div>
        <div css={fieldRowStyles}>
          <div css={fieldLabelStyles}>Site:</div>
          <div css={fieldValueStyles}>{site}</div>
        </div>
        <div css={locationRowStyles}>
          <div css={fieldLabelStyles}>Location:</div>
          <div css={fieldValueStyles}>{location}</div>
        </div>
        <div css={statusRowStyles}>
          <div css={statusLabelStyles}>Status:</div>
          <div css={statusValueStyles}>{status}</div>
        </div>
      </div>
    </div>
  );
};

const trialCardStyles = css`
  justify-content: center;
  align-items: stretch;
  border-radius: 16px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  min-height: 173px;
  padding: 24px;
  flex-direction: column;
  width: 314px;
  background-color: #f6f3ec;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0px 4px 8px 0px rgba(0, 0, 0, 0.2),
      0px 2px 6px 2px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
    padding: 20px;
    min-height: 160px;
    margin: 0;
  }
  @media (max-width: 480px) {
    padding: 16px;
    min-height: 140px;
    border-radius: 12px;
  }
`;

const cardContentStyles = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex: 1;
`;

const trialNameStyles = css`
  color: #1d2433;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family:
    "TT Firs Neue Trial Var Roman",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.5px;
  }
`;

const fieldRowStyles = css`
  display: flex;
  margin-top: 4px;
  width: 100%;
  align-items: flex-start;
  gap: 4px;
  justify-content: flex-start;
`;

const locationRowStyles = css`
  display: flex;
  margin-top: 4px;
  width: 100%;
  align-items: flex-start;
  gap: 4px;
  white-space: nowrap;
  justify-content: flex-start;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const statusRowStyles = css`
  display: flex;
  margin-top: 4px;
  width: 100%;
  align-items: flex-start;
  gap: 4px;
  font-size: 10px;
  white-space: nowrap;
  justify-content: flex-start;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const fieldLabelStyles = css`
  color: #1d2433;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family:
    "Poppins",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
`;

const fieldValueStyles = css`
  color: #1d2433;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family:
    "Poppins",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  flex: 1;
`;

const statusLabelStyles = css`
  color: #1d2433;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family:
    "Poppins",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 24px;
`;

const statusValueStyles = css`
  color: #1d2433;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-family:
    "Poppins",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 24px;
  flex: 1;
`;

export default TrialCard;
