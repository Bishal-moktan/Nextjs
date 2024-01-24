import { postData } from '@/libs/actions';

const ServerAction = () => {
  return (
    <form action={postData}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="desc" name="desc" />
      <input type="text" placeholder="slug" name="slug" />
      <input type="text" placeholder="userId" name="userId" />
      <button>Add post</button>
    </form>
  );
};

export default ServerAction;
