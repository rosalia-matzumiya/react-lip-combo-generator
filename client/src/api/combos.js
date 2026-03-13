export async function fetchRandomCombos(count = 3) {
  const response = await fetch(`http://localhost:4000/combos/random?count=${count}`);

  const data = await response.json();

  return data;

}