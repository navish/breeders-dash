/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const PlotGrid = ({ onPlotSelect, selectedPlot }) => {
  const [hoveredPlot, setHoveredPlot] = useState(null);

  // Generate plot data with different plant counts
  const generatePlotData = () => {
    const plots = [];
    let plotNumber = 1;

    for (let row = 1; row <= 7; row++) {
      for (let col = 1; col <= 5; col++) {
        const plantCount = Math.floor(Math.random() * 120) + 10;
        plots.push({
          id: plotNumber,
          row,
          col,
          plantCount,
          plotId: `Plot ${plotNumber}`,
        });
        plotNumber++;
      }
    }
    return plots;
  };

  const plots = generatePlotData();

  const getPlotColor = (plantCount) => {
    if (plantCount >= 100) return "#4A1E8A"; // Dark purple
    if (plantCount >= 80) return "#7C3AED"; // Medium purple
    if (plantCount >= 60) return "#A855F7"; // Light purple
    if (plantCount >= 40) return "#C084FC"; // Lighter purple
    if (plantCount >= 20) return "#DDD6FE"; // Very light purple
    return "#F3F4F6"; // Light gray for lowest counts
  };

  const handlePlotClick = (plot) => {
    onPlotSelect(plot);
  };

  return (
    <div css={plotGridContainerStyles}>
      <div css={plotGridStyles}>
        <div css={headerRowStyles}>
          <div css={rowHeaderStyles}></div>
          {[1, 2, 3, 4, 5].map((col) => (
            <div key={col} css={columnHeaderStyles}>
              Column {col}
            </div>
          ))}
        </div>

        {[1, 2, 3, 4, 5, 6, 7].map((row) => (
          <div key={row} css={plotRowStyles}>
            <div css={rowHeaderStyles}>Row {row}</div>
            {plots
              .filter((plot) => plot.row === row)
              .map((plot) => (
                <div
                  key={plot.id}
                  css={[
                    plotCellStyles,
                    { backgroundColor: getPlotColor(plot.plantCount) },
                    selectedPlot?.id === plot.id && selectedPlotStyles,
                    hoveredPlot === plot.id && hoveredPlotStyles,
                  ]}
                  onClick={() => handlePlotClick(plot)}
                  onMouseEnter={() => setHoveredPlot(plot.id)}
                  onMouseLeave={() => setHoveredPlot(null)}
                >
                  {selectedPlot?.id === plot.id ? plot.plotId : plot.id}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div css={legendContainerStyles}>
        <div css={legendTitleStyles}>Key</div>
        <div css={legendBarStyles}>
          <div css={legendGradientStyles}></div>
          <div css={legendLabelsStyles}>
            <span>0</span>
            <span>60</span>
            <span>120</span>
          </div>
          <div css={legendCaptionStyles}>Number of plants</div>
        </div>
      </div>
    </div>
  );
};

const plotGridContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const plotGridStyles = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const headerRowStyles = css`
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
`;

const plotRowStyles = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const rowHeaderStyles = css`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
`;

const columnHeaderStyles = css`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
`;

const plotCellStyles = css`
  width: 50px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.05);
    border-color: #1f2937;
  }
`;

const selectedPlotStyles = css`
  border-color: #1f2937 !important;
  transform: scale(1.05);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

const hoveredPlotStyles = css`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;

const legendContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const legendTitleStyles = css`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
`;

const legendBarStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const legendGradientStyles = css`
  width: 200px;
  height: 16px;
  background: linear-gradient(
    to right,
    #f3f4f6 0%,
    #ddd6fe 20%,
    #c084fc 40%,
    #a855f7 60%,
    #7c3aed 80%,
    #4a1e8a 100%
  );
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

const legendLabelsStyles = css`
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-size: 12px;
  color: #6b7280;
`;

const legendCaptionStyles = css`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`;

export default PlotGrid;
