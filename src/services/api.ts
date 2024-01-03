import axios from 'axios';

export async function getData(query: string): Promise<void> {
  try {
    const data = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${query.toLowerCase()}&page=2`
    );
    console.log(data.data.results);
  } catch (error) {
    console.log(error);
  }
}
