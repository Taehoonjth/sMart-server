const bcrypt = require('bcrypt-nodejs')
var seedData = {}

seedData.usersArray = [
  {
  username: 'brenner-test',
  first_name: 'brenner',
  last_name: 'spear',
  password: bcrypt.hashSync('testpassword'),
  wallet_address: 'none',
  address: '400 baker st',
  city: 'San Francisco',
  state: 'CA',
  country: 'US',
  postal_code: '94117',
  phone_number: '111-222-3333',
  preferred_time: '16:30:00 PST'
  },
  {
  username: 'daniel-test',
  first_name: 'daniel',
  last_name: 'voigt',
  password: bcrypt.hashSync('testpassword'),
  wallet_address: 'none',
  address: '944 market st',
  city: 'San Francisco',
  state: 'CA',
  country: 'US',
  postal_code: '94117',
  phone_number: '111-222-4444',
  preferred_time: '11:30:00 PST'
  },
  {
  username: 'greg-test',
  first_name: 'Greg',
  last_name: 'Prouty',
  password: bcrypt.hashSync('testpassword'),
  wallet_address: 'none',
  address: '556 mission st',
  city: 'San Francisco',
  state: 'CA',
  country: 'US',
  postal_code: '94117',
  phone_number: '111-222-4444',
  preferred_time: '9:30:00 PST'
  },
  {
  username: 'mark-test',
  first_name: 'Mark',
  last_name: 'Jung',
  password: bcrypt.hashSync('testpassword'),
  wallet_address: 'none',
  address: '200 Valencia st',
  city: 'San Francisco',
  state: 'CA',
  country: 'US',
  postal_code: '94117',
  phone_number: '111-222-4444',
  preferred_time: '20:30:00 PST'
  }
]

seedData.categoryArray = [
  {
  name: 'electronics',
  parent_category_id: null,
  },
  {
  name: 'clothes',
  parent_category_id: null,
  },
  {
  name: 'antiques',
  parent_category_id: null,
  },
  {
  name: 'games',
  parent_category_id: null,
  },
  {
  name: 'toys',
  parent_category_id: null,
  },
  {
  name: 'cars',
  parent_category_id: null,
  }
]

seedData.productArray = [
  {
  seller_id: 1,
  buyer_id: null,
  category_id: 1,
  title: 'macbook pro',
  description: 'very old. still works though',
  asking_price: 200.343,
  address: '400 baker st',
  postal_code: '94117',
  // preferred_time_and_date: 'February 22 12:30:00 2017 PST',
  image_links: [
    "https://images.craigslist.org/00505_7pnZpZ8Vnp2_600x450.jpg",
    "https://images.craigslist.org/00404_c04Y4L0KJO6_600x450.jpg",
    "https://images.craigslist.org/00d0d_bY2WDoNBmzB_600x450.jpg",
    ]
  },
  {
  seller_id: 1,
  buyer_id: null,
  category_id: 1,
  title: 'Apple iPad Black',
  description: 'dark as night. turns on fine',
  asking_price: 100,
  address: '400 baker st',
  postal_code: '94117',
  // preferred_time_and_date: 'February 21 11:30:00 2017 PST',
  image_links: [
    "https://images.craigslist.org/00U0U_2Yb8OBggWpS_600x450.jpg",
    "https://images.craigslist.org/01212_iQjjXfiw1Nh_600x450.jpg",
    "https://images.craigslist.org/00F0F_h07TBD325k7_600x450.jpg",
    ]
  },
  {
  seller_id: 1,
  buyer_id: null,
  category_id: 2,
  title: 'long sleeve shirt',
  description: 'blue and green stripes',
  asking_price: 12.50,
  address: '400 baker st',
  postal_code: '94117',
  // preferred_time_and_date: 'February 26 20:30:00 2017 PST',
  image_links: [
    "https://images.craigslist.org/00q0q_lrtlvRAGXm7_600x450.jpg",
    "https://images.craigslist.org/00K0K_iJ5dAZCJgAu_600x450.jpg"
    ]
  },
  {
  seller_id: 2,
  buyer_id: null,
  category_id: 2,
  title: 'beanie',
  description: 'keeps ur noggin quite warm',
  asking_price: 7,
  address: '944 market st',
  postal_code: '94117',
  // preferred_time_and_date: 'February 28 9:30:30 2017 PST',
  image_links: [
    "https://images.craigslist.org/00c0c_lBDttuJqkIu_600x450.jpg",
    "https://images.craigslist.org/00u0u_5b77UXS8EaK_600x450.jpg",
    "https://images.craigslist.org/00a0a_6M9odNQtSnJ_600x450.jpg",
    ]
  }
]

module.exports = seedData