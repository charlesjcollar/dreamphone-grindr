import games from '../assets/games.json'

export const getRandomKey = (): string => {
  const keys = Object.keys(games)
  const index = Math.round(Math.random() * keys.length)
  return keys[index]
}

export const isKeyValid = (key: string | undefined): boolean =>
  key !== undefined && Object.prototype.hasOwnProperty.call(games, key)
