/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const ExportModal = ({ isOpen, onClose, onExport }) => {
  const [selectedFormat, setSelectedFormat] = useState("CSV");

  const handleExport = () => {
    onExport(selectedFormat);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div css={overlayStyles} onClick={onClose}>
      <div css={modalStyles} onClick={(e) => e.stopPropagation()}>
        <div css={modalContentStyles}>
          <h2 css={modalTitleStyles}>Export Data</h2>

          <div css={formatSectionStyles}>
            <p css={formatLabelStyles}>Choose export format</p>
            <div css={radioGroupStyles}>
              <label css={radioOptionStyles}>
                <input
                  type="radio"
                  name="format"
                  value="CSV"
                  checked={selectedFormat === "CSV"}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  css={radioInputStyles}
                />
                <span css={radioLabelStyles}>CSV</span>
              </label>
            </div>
          </div>

          <div css={actionsStyles}>
            <button css={cancelButtonStyles} onClick={onClose}>
              Cancel
            </button>
            <button css={exportButtonStyles} onClick={handleExport}>
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const overlayStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalStyles = css`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
`;

const modalContentStyles = css`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const modalTitleStyles = css`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const formatSectionStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const formatLabelStyles = css`
  font-size: 14px;
  color: #374151;
  margin: 0;
`;

const radioGroupStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const radioOptionStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const radioInputStyles = css`
  width: 16px;
  height: 16px;
  accent-color: #401805;
`;

const radioLabelStyles = css`
  font-size: 14px;
  color: #374151;
  cursor: pointer;
`;

const actionsStyles = css`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
`;

const cancelButtonStyles = css`
  padding: 10px 20px;
  border: 1px solid #d1d5db;
  background-color: #fff;
  color: #374151;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }
`;

const exportButtonStyles = css`
  padding: 10px 20px;
  border: none;
  background-color: #f59e0b;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d97706;
  }
`;

export default ExportModal;
