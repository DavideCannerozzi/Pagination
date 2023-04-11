import MyPosts from "../Post.inteface";

interface Props {
  blog: MyPosts[];
}

export const Post: React.FC<Props> = ({ blog }) => {
  return (
    <div>
      {blog.map((post: MyPosts) => {
        return (
          <div>
            <ul>
              <li>{post.title}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
