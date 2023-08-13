import { Helpers } from "@/Helpers";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const PortfolioPage = dynamic(() => import("./PortfolioPage"));

const Portfolio = async ({ params }: any) => {
  const id = params.id;
  const single = await Helpers.getSingle(id);

  return <PortfolioPage data={single} />;
};

export default Portfolio;
