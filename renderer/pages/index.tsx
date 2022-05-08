import Layout from "../components/Layout";

const IndexPage = () => {
  const onClickButton = () => {};

  return (
    <Layout title="Home | splish (speak and listen, shadow)">
      <div>
        <button onClick={onClickButton}>再生</button>
      </div>
    </Layout>
  );
};

export default IndexPage;
