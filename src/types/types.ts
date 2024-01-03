type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'unknown' | 'Female' | 'Male' | 'Genderless';
  image: string;
  episode: string[];
  url: string;
  created: string;

  origin: Location;
  location: Location;
};

export type ApiResponse = {
  data: Character[];
};
