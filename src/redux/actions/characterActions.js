export function setCharacters(characterList) {
  return {
    type: "UPDATE_CHARACTER_LIST",
    results: characterList,
  };
}
