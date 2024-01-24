import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <p>404 page not found</p>
      <p>Please try the next page</p>
      <Link href={'/'}>Return Home</Link>
    </div>
  );
};
export default NotFound;
