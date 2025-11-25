import { Link } from "react-router-dom";

const BlogCard = ({ _id, title, content, media, author, createdAt }) => {
  const imageUrl = media && media.length > 0 ? media[0].url : "";
  const excerpt =
    content.length > 100 ? content.substring(0, 100) + "..." : content;
  const date = new Date(createdAt).toLocaleDateString("vi-VN");

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col min-h-[400px] animate-fade-in">
      {imageUrl && (
        <div className="overflow-hidden rounded-md mb-3 w-full h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{excerpt}</p>
      <div className="text-sm text-gray-500 mb-3">
        By <span className="font-medium">{author?.name}</span> • {date}
      </div>
      <div className="mt-auto">
        <Link to={`/blog/${_id}`} className="text-indigo-600 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
