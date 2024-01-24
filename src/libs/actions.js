import { Post } from './models';
import { connectDB } from './utils';

export const postData = async (formData) => {
  'use server';
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectDB();
    const post = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await post.save();
  } catch (error) {
    console.log(error);
    throw new Error('Error posting the data');
  }
};
