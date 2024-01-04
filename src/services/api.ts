import { Character } from '../types/types';

export async function fetchCharacters(query?: string): Promise<Character[]> {
  try {
    let allCharacters: Character[] = [];
    let page = 1;
    let data;

    do {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?${
          query ? `name=${query.toLowerCase()}&` : ''
        }page=${page}`
      );
      data = await response.json();
      allCharacters = [...allCharacters, ...data.results];
      page++;
    } while (page <= data.info.pages);

    return allCharacters;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
