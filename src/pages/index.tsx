import Layout from '@modules/layout/components/layout';

const HomePage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Home | Frontend Tools',
      }}
    >
      <h1 className="font-sans text-2xl font-bold">Frontend Tools</h1>
    </Layout>
  );
};

export default HomePage;
