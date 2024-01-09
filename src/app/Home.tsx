import React from 'react';
import HomePage from '../components/Homepage/HomePage';

interface HomeProps {
  searchParams: { [key: string]: string | string[] };
}

export const Home: React.FC<HomeProps> = ({ searchParams }) => {

  const page = parseInt(searchParams.page as string) || 1;

  return (
    <>
      <HomePage page={page} />
    </>
  );
};

export default Home;
