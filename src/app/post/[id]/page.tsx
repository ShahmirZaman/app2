import Link from "next/link";
const getData = async ({ id }: { id: string }) => {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const res = await fetchData.json();
  return res;
};

const Post = async ({ params }: any) => {
  console.log(params);
  const post = await getData({ id: params.id });
  console.log(post);
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link href={`/post`}>Go Back</Link>
    </div>
  );
};
export default Post;
