import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'morondi',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'karanja',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'bumper lights',
      slug: 'bumber-lights',
      category: 'lights',
      image: '/images/p1.jpg',
      price: '1500',
      countInStock: '4',
      rating: '4',
      numReviews: 25,
      description:
        'Car Rear Bumper Light, Rear Right Side Lower Bumper Red Reverse Tail Light Fog Lamp Replacement for Audi Q5 2006-2016 8R0945096',
    },
    {
      //_id: '2',
      name: 'bumper7lights',
      slug: 'bumber77lights',
      category: 'lights',
      image: '/images/p1.jpg',
      price: '150',
      countInStock: '0',
      rating: '5',
      numReviews: 10,
      description:
        'Car Rear Bumper Light, Rear Right Side Lower Bumper Red Reverse Tail Light Fog Lamp Replacement for Audi Q5 2006-2016 8R0945096',
    },
    {
      //_id: '3',
      name: 'bumper_lights',
      slug: 'bumber__lights',
      category: 'lights',
      image: '/images/p1.jpg',
      price: '150',
      countInStock: '4',
      rating: '4.5',
      numReviews: 70,
      description:
        'Car Rear Bumper Light, Rear Right Side Lower Bumper Red Reverse Tail Light Fog Lamp Replacement for Audi Q5 2006-2016 8R0945096',
    },
    {
      //_id: '4',
      name: 'bumper1lights',
      slug: 'bumber11lights',
      category: 'lights',
      image: '/images/p1.jpg',
      price: '150',
      countInStock: '4',
      rating: '3',
      numReviews: 5,
      description:
        'Car Rear Bumper Light, Rear Right Side Lower Bumper Red Reverse Tail Light Fog Lamp Replacement for Audi Q5 2006-2016 8R0945096',
    },
  ],
};
export default data;
