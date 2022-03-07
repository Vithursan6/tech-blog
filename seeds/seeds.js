// import the db connection and the model you're seeding up here
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');


const posts = [
  {
    title: 'Checkout this new release',
    post_text: 'Hey check this out, the line up is so huge out side.',
    user_id: 1
  },
  {
    title: 'New Iphone out tomorrrow',
    post_text: 'Is anyone else as excited as I am for tommorow?',
    user_id: 2
  },
  {
    title: 'Need PS5!',
    post_text: 'Why are there so many bots and where are all the ps5s going?',
    user_id: 3
  }
];

const users = [
  {
    username: 'Jackson',
    password: '123456'
  },
  {
    username: 'Simpson',
    password: '123456'
  },
  {
    username: 'Derek',
    password: '123456'
  },
  {
    username: 'William',
    password: '123456'
  },
  {
    username: 'Bryant',
    password: '123456'
  },
  {
    username: 'Jefferson',
    password: '123456'
  }
];

const comments = [
  {
    comment_text: 'comment1',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'comment2',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'comment3',
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: 'comment4',
    user_id: 1,
    post_id: 1,
  },
]

const seedPosts = async () => {

  console.log('Seeding data now...');
  console.log('\n=================\n');

  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await User.bulkCreate(users);
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);

  } catch (err) {
    console.log(err);
    return;
  }

  console.log('\n=================\n');
  console.log('Seeding successful.');
};

seedPosts();

module.exports = { seedPosts };