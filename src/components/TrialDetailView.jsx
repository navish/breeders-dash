/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import PlotGrid from "./PlotGrid";
import DataCharts from "./DataCharts";
import ExportModal from "./ExportModal";

const TrialDetailView = ({ trial, onBack }) => {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeView, setActiveView] = useState("Graphs");

  const handlePlotSelect = (plot) => {
    setSelectedPlot(plot);
  };

  const handleExport = (format) => {
    console.log(`Exporting data in ${format} format`);
    // Here you would implement the actual export functionality
  };

  return (
    <div css={detailViewContainerStyles}>
      {/* Header */}
      <div css={headerStyles}>
        <div css={headerTopStyles}>
          <button css={backButtonStyles} onClick={onBack}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7463ce3cb73e45849dff91794e949928/6aa47febde37580ceb2484f59103748f4cf6b17d?placeholderIfAbsent=true"
              css={backIconStyles}
              alt="Back"
            />
            <span css={backTextStyles}>{trial.trialName}</span>
          </button>

          <div css={headerRightStyles}>
            <span css={plotTitleStyles}>Plot 1/Rep 1</span>
            <button
              css={exportButtonStyles}
              onClick={() => setShowExportModal(true)}
            >
              Export data
            </button>
          </div>
        </div>

        {/* Filters */}
        <div css={filtersContainerStyles}>
          <div css={filterStyles}>
            <span css={filterLabelStyles}>Filters:</span>
            <select css={filterSelectStyles}>
            <option>Plant stand at emergence</option>
            <option>50% Flowering</option>
            <option>Pod count</option>
            </select>
            <select css={filterSelectStyles}>
              <option>18-04-2023</option>
              <option>20-04-2023</option>
              <option>18-05-2023</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div css={mainContentStyles}>
        {/* Left Side - Plot Grid */}
        <div css={leftPanelStyles}>
          <PlotGrid
            onPlotSelect={handlePlotSelect}
            selectedPlot={selectedPlot}
          />
        </div>

        {/* Right Side - Charts */}
        <div css={rightPanelStyles}>
          {/* View Toggle */}
          <div css={viewToggleStyles}>
            <button
              css={[
                toggleButtonStyles,
                activeView === "Graphs" && activeToggleStyles,
              ]}
              onClick={() => setActiveView("Graphs")}
            >
              <span css={toggleIconStyles}>📊</span>
              Graphs
            </button>
            <button
              css={[
                toggleButtonStyles,
                activeView === "Images" && activeToggleStyles,
              ]}
              onClick={() => setActiveView("Images")}
            >
              <span css={toggleIconStyles}>📷</span>
              Images
            </button>
          </div>

          {/* Charts */}
          <DataCharts selectedPlot={selectedPlot} />
        </div>
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        onExport={handleExport}
      />
    </div>
  );
};

const detailViewContainerStyles = css`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const headerStyles = css`
  background-color: #401805;
  color: #fff;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const headerTopStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const backButtonStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const backIconStyles = css`
  width: 20px;
  height: 20px;
  filter: invert(1);
`;

const backTextStyles = css`
  font-family:
    "TT Firs Neue Trial Var Roman",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
`;

const headerRightStyles = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const plotTitleStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

const exportButtonStyles = css`
  background-color: #f59e0b;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d97706;
  }
`;

const filtersContainerStyles = css`
  background-color: #fff;
  color: #401805;
  padding: 12px 16px;
  border-radius: 8px 8px 0 0;
  margin-top: 8px;
`;

const filterStyles = css`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const filterLabelStyles = css`
  font-size: 14px;
  font-weight: 500;
  color: #401805;
`;

const filterSelectStyles = css`
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  color: #374151;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    border-color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #401805;
    box-shadow: 0 0 0 1px #401805;
  }
`;

const mainContentStyles = css`
  display: flex;
  flex: 1;
  gap: 24px;
  padding: 24px;
  background-color: #f9fafb;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

const leftPanelStyles = css`
  flex: 1;
  min-width: 0;
`;

const rightPanelStyles = css`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const viewToggleStyles = css`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
`;

const toggleButtonStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  background: none;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

const activeToggleStyles = css`
  background-color: #401805 !important;
  color: #fff !important;

  &:hover {
    background-color: #401805 !important;
    color: #fff !important;
  }
`;

const toggleIconStyles = css`
  font-size: 16px;
`;

export default TrialDetailView;
