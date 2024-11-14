import { AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <>
      <div className="border rounded-lg mb-4 overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-base-200">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={news.author.img}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-sm font-semibold">{news.author.name}</h3>
              <p className="text-xs text-gray-500">
                {news.author.published_date}
              </p>
            </div>
          </div>

          {/* Share Icon */}
          <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
        </div>
        <div className="card w-full bg-white  p-4 ">
          {/* Title */}
          <h2 className="mt-4 text-xl font-bold">{news.title}</h2>

          {/* Image */}
          <figure className="my-4">
            <img
              src={news.image_url}
              alt="News"
              className=" object-cover w-full"
            />
          </figure>

          {/* Details */}
          <p className="text-gray-700 text-sm mb-4">
            {news.details.slice(0, 150)}...
          </p>
          <p className="text-red-500 text-sm font-semibold cursor-pointer">
            Read More
          </p>

          {/* Footer with Rating and Views */}
          <div className="flex justify-between items-center mt-4">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.round(news.rating.number) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold">
                {news.rating.number}
              </span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-2 text-gray-500">
              <AiOutlineEye />
              <span>{news.total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
