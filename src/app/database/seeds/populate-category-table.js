exports.seed = (knex) => {
  return knex('Category').insert([
    {Id: 1, Description: 'Games'},
    {Id: 2, Description: 'Eletrônicos'},
    {Id: 3, Description: 'Imóveis'},
    {Id: 4, Description: 'Carros'},
    {Id: 5, Description: 'Celulares'},
  ]);
};
