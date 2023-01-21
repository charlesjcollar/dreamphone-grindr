import games from '../assets/games.json';

export const getRandomKey = (): string => {
  let keys = Object.keys(games);
  let index = Math.round(Math.random() * keys.length);
  return keys[index];
}

export const isKeyValid = (key: string | undefined): boolean => key !== undefined && games.hasOwnProperty(key);