// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }
//
// let result = fetchItems();
// console.log(result);

async function fetchItems(): Promise<string[]> {
  let items: string[] = ['a', 'b', 'c'];
  return await items;
}

fetchItems();
