import { useEffect, useState } from 'react';
import MultiSelect from './MultiSelect';
import { Character } from '../../types/types';
import { fetchCharacters } from '../../services/api';

const Main = () => {
  const [data, setData] = useState<Character[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const characters = await fetchCharacters();
      setData(characters);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <main className="pt-24 lg:pt-32 pb-16  h-screen flex justify-center items-start px-5">
      <MultiSelect data={data} />
    </main>
  );
};

export default Main;
