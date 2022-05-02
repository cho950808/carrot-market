import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";
import Seo from "../../components/seo";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
      <Seo title="커뮤니티" />
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
