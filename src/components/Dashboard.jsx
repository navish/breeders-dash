/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TopBar from "./TopBar";
import FilterSection from "./FilterSection";
import TrialCard from "./TrialCard";

const Dashboard = () => {
  const trialsData = [
    {
      id: 1,
      trialName: "Artemis MVP Validation Trials 2025",
      site: "CIAT Selian",
      location: "Arusha",
      status: "active",
    },
    {
      id: 2,
      trialName: "Artemis MVP Validation Trials 2025",
      site: "CIAT Kawanda",
      location: "Uganda",
      status: "active",
    },
    {
      id: 3,
      trialName: "Landraces Purification Trials",
      site: "TARI Maruku",
      location: "Bukoba",
      status: "active",
    },
    {
      id: 4,
      trialName: "PABRA Bush Bean Trials",
      site: "CIAT",
      location: "Arusha",
      status: "active",
    },
  ];

  return (
    <div css={dashboardContainerStyles}>
      <TopBar />
      <FilterSection />
      <div css={trialsGridStyles}>
        {trialsData.map((trial) => (
          <TrialCard
            key={trial.id}
            trialName={trial.trialName}
            site={trial.site}
            location={trial.location}
            status={trial.status}
          />
        ))}
      </div>
    </div>
  );
};

const dashboardContainerStyles = css`
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  padding-bottom: 694px;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;
  min-height: 100vh;
  @media (max-width: 991px) {
    padding-bottom: 60px;
  }
  @media (max-width: 480px) {
    padding-bottom: 40px;
  }
`;

const trialsGridStyles = css`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(314px, 1fr));
  margin-top: 21px;
  gap: 19px;
  font-family:
    "Poppins",
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 13px;
  color: #1d2433;
  font-weight: 400;
  line-height: 24px;
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 0 20px;
    gap: 16px;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    gap: 14px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    gap: 12px;
    margin-top: 12px;
  }
`;

export default Dashboard;
