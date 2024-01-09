
import { NextPage } from 'next';
import HomePage from '../components/Homepage/HomePage'
interface HomeProps {
  searchParams: { [key: string]: string | string[] };
}

const Home: NextPage<HomeProps> = ({ searchParams }) => {
 
  const page = parseInt(searchParams.page as string) || 1;

  return (
    <>
      <HomePage page={page}/>
    </>
  )
}


export default Home