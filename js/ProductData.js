module.exports = {
  // Load Mock Product Data into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '123',
        name: 'Tech Neck',
        image: 'techneck.jpg',
        description: 'The best accessory for people whose arms get tired holding their phones in front of their faces.',
        variants: [
          {
            sku: '01',
            type: 'Shark Butt Blue',
            price: 19.99,
            inventory: 2
          },
          {
            sku: '02',
            type: 'Pupper Nose Pink',
            price: 17.99,
            inventory: 10
          },
          {
            sku: '03',
            type: 'Venus Fly Trap Green',
            price: 15.49,
            inventory: 99
          }
        ]
      }
    ]));
  }
};
