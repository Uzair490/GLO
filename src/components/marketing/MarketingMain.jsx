import Layout from "../Layout";
import BreadCrumb from "../shared/breadcrumb/BreadCrumb";
import MarketingTabs from "./MarketingTabs";

const MarketingMain = () => {
  return (
    <Layout>
      <BreadCrumb />
      <MarketingTabs />
    </Layout>
  );
};

export default MarketingMain;