import { useSelector } from 'react-redux';

import Heading from '../components/Home/Heading';
import SecondHeading from '../components/Home/SecondHeading';
import RegisterForm from '../components/Home/RegisterForm';


const HomePage = () => {
  const logged = useSelector((state) => state.auth.logged);
  return (
      <section className="pageWrapper">
        <Heading />
        {!logged ? <RegisterForm /> : <SecondHeading />}
      </section>
  );
};

export default HomePage;
