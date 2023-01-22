import games from '../assets/games.json';
import people from '../assets/people.json';
import clues from '../assets/clues.json';
import { Game, Profile } from '../types';

export const getRandomKey = (): string => {
  const keys = Object.keys(games);
  const index = Math.round(Math.random() * keys.length);
  return keys[index];
};

export const isKeyValid = (key: string | undefined): boolean =>
  key !== undefined && Object.prototype.hasOwnProperty.call(games, key);

export const generateGame = (key: string): Game => {
  const value = games[key as keyof typeof games];
  const profiles: Profile[] = [];
  const indexes = [];
  let indexOfCatfish = -1;
  for (let i = 0; i < 30; i++) {
    const index = parseInt(value[i * 2] + value[i * 2 + 1], 16);
    indexes.push(index);
    profiles.push({
      ...people[i],
      isCatfish: Math.floor(index / 30) >= 2,
      clue: clues[index % 30],
      distance: parseInt(value[i] + value[59 - i], 16) * 19 + 300,
      images: Math.floor(index / 30) % 2 === 1 ? [] : people[i].images,
    });
    if (Math.floor(index / 30) >= 2) {
      indexOfCatfish = i;
    }
  }
  const catfishProfile = profiles[indexOfCatfish];
  profiles.forEach((profile) => {
    if (
      profile.clue === undefined ||
      catfishProfile[profile.clue.category as keyof Profile] ===
        profile.clue.value
    ) {
      profile.clue = {
        category: 'empty',
        value: 'empty',
        clue: "I ain't telling you shit!",
      };
    }
  });
  profiles.sort((a, b) => a.distance - b.distance);
  return {
    key,
    value,
    profiles,
  };
};
