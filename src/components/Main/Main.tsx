import { useEffect, useState } from 'react';
import MultiSelect from './MultiSelect';
import { Character } from '../../types/types';
import { fetchCharacters } from '../../services/api';
import { Loader2 } from 'lucide-react';

const Main = () => {
  const [data, setData] = useState<Character[] | []>([]);
  const [loaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const characters = await fetchCharacters();
      setData(characters);
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  if (!loaded) {
    return (
      <main className="pt-24 lg:pt-32 pb-16  h-screen flex justify-center items-start px-5">
        <div className="flex items-center gap-x-5">
          <p>Retrieving data from API...</p>
          <Loader2 className="animate-spin" />
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 lg:pt-32 pb-16  h-screen flex justify-center items-start px-5">
      <MultiSelect data={data} />
    </main>
  );
};

export default Main;
