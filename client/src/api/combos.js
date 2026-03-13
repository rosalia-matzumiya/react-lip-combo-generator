export async function fetchRandomCombos(colorFamily = "", count = 3) {
  let url = `http://localhost:4000/combos/random?count=${count}`;

  if (colorFamily) {
    url += `&colorFamily=${colorFamily}`;
  }
  const response = await fetch(url);
  const data = response.json();

  return data;

}