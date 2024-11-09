import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Book({ book }) {
  const { bookId, author, bookName, category, image, publisher, rating, tags } =
    book;
  // console.log(book);
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-6 border mx-auto">
        <figure className="bg-gray-200 px-20 py-6 rounded-2xl">
          <img
            className="w-[134px] h-[166px] object-fill rounded"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="my-5">
          <div className="flex justify-start gap-4">
            {tags.map((tag, index) => (
              <button className="btn btn-sm" key={index}>
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-xl font-bold my-4">{bookName}</h2>
          <p className="font-medium text-gray-500 font-work">By: {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between items-center font-work text-gray-600">
            <div className="badge badge-outline">Fiction</div>
            <div className="font-medium flex items-center gap-1">
              <span>{rating}</span>
              <span>
                <IoStarOutline />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
