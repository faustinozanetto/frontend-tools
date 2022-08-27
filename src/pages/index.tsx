import Layout from '@modules/layout/components/layout';

const HomePage: React.FC = () => {
  return (
    <Layout
      headProps={{
        title: 'Home | Frontend Tools',
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Frontend Tools
      </h1>
    </Layout>
  );
};

export default HomePage;
