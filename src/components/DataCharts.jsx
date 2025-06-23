/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const DataCharts = ({ selectedPlot }) => {
  // Generate sample data based on selected plot
  const generateChartData = (plotId) => {
    const baseValue = plotId ? (plotId * 10) % 100 : 50;
    return {
      standCount: Array.from({ length: 8 }, (_, i) => ({
        week: i + 1,
        value: baseValue + Math.random() * 20 - 10,
      })),
      flowerCount: Array.from({ length: 8 }, (_, i) => ({
        week: i + 1,
        value: baseValue * 0.8 + Math.random() * 15 - 7.5,
      })),
      podCount: Array.from({ length: 8 }, (_, i) => ({
        week: i + 1,
        value: baseValue * 0.6 + Math.random() * 12 - 6,
      })),
    };
  };

  const chartData = generateChartData(selectedPlot?.id);

  const SimpleLineChart = ({ data, title, color = "#6366F1" }) => {
    const maxValue = Math.max(...data.map((d) => d.value));
    const minValue = Math.min(...data.map((d) => d.value));
    const range = maxValue - minValue || 1;

    const pathData = data
      .map((point, index) => {
        const x = (index / (data.length - 1)) * 280; // Chart width
        const y = 100 - ((point.value - minValue) / range) * 80; // Chart height with padding
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    return (
      <div css={chartContainerStyles}>
        <h3 css={chartTitleStyles}>{title}</h3>
        <div css={chartWrapperStyles}>
          <svg width="280" height="120" css={svgStyles}>
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={color} stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {[20, 40, 60, 80].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="280"
                y2={y}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            ))}

            {/* Area fill */}
            <path
              d={`${pathData} L 280 100 L 0 100 Z`}
              fill={`url(#gradient-${title})`}
            />

            {/* Line */}
            <path
              d={pathData}
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}
            {data.map((point, index) => {
              const x = (index / (data.length - 1)) * 280;
              const y = 100 - ((point.value - minValue) / range) * 80;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill={color}
                  stroke="#fff"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  if (!selectedPlot) {
    return (
      <div css={emptyStateStyles}>
        <div css={emptyMessageStyles}>Click on a plot to view data</div>
      </div>
    );
  }

  return (
    <div css={chartsContainerStyles}>
      <div css={plotInfoStyles}>
        <h2 css={plotTitleStyles}>{selectedPlot.plotId}</h2>
        <p css={plotDetailsStyles}>
          Row {selectedPlot.row}, Column {selectedPlot.col} •{" "}
          {selectedPlot.plantCount} plants
        </p>
      </div>

      <div css={chartsGridStyles}>
        <SimpleLineChart
          data={chartData.standCount}
          title="Stand Count"
          color="#10B981"
        />
        <SimpleLineChart
          data={chartData.flowerCount}
          title="Flower Count"
          color="#F59E0B"
        />
        <SimpleLineChart
          data={chartData.podCount}
          title="Pod Count"
          color="#8B5CF6"
        />
      </div>
    </div>
  );
};

const chartsContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 400px;
`;

const plotInfoStyles = css`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 16px;
`;

const plotTitleStyles = css`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 4px;
`;

const plotDetailsStyles = css`
  font-size: 14px;
  color: #6b7280;
`;

const chartsGridStyles = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const chartContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const chartTitleStyles = css`
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  margin: 0;
`;

const chartWrapperStyles = css`
  position: relative;
  background-color: #fafafa;
  border-radius: 8px;
  padding: 16px;
`;

const svgStyles = css`
  overflow: visible;
`;

const emptyStateStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 2px dashed #d1d5db;
`;

const emptyMessageStyles = css`
  font-size: 16px;
  color: #6b7280;
  text-align: center;
`;

export default DataCharts;
