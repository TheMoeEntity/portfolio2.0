import dynamic from "next/dynamic";

const PortfolioPage = dynamic(() => import("./PortfolioPage"));

const Portfolio = async ({ params }: any) => {
  return <PortfolioPage title={params.id} />;
};

export default Portfolio;
