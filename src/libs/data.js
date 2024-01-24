import { unstable_noStore as noStore } from 'next/cache';
import { Post, User } from './models';
import { connectDB } from './utils';

export const getPosts = async () => {
  connectDB();
  noStore();
  try {
    const data = await Post.find();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get all posts');
  }
};

export const getPost = async (slug) => {
  try {
    const post = await Post.findOne({ slug });
    console.log(post);
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get the post');
  }
};

export const getUser = async (id) => {
  try {
    const user = await User.findOne({ _id: id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get the user');
  }
};

export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get all the users');
  }
};
