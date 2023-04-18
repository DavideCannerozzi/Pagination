import MyPosts from "./Post.inteface";

interface Props {
  blog: MyPosts[];
}

export const Post: React.FC<Props> = ({ blog }) => {
  return (
    <div className="">
    
      {blog.map((post: MyPosts) => {
        return (
            <ul>
              <li className="text-gray-700 font-semibold text-xl mb-2 border p-2">{post.title}</li>
            </ul>
        );
      })}
    </div>
  );
};
