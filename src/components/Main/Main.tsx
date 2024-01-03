import { useEffect } from 'react';
import MultiSelect from './MultiSelect';
import { getData } from '../../services/api';

const Main = () => {
  useEffect(() => {
    getData('Rick');
  }, []);
  return (
    <main className="pt-24 lg:pt-32 pb-16  h-screen flex justify-center items-start px-5">
      <MultiSelect />
    </main>
  );
};

export default Main;
