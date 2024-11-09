import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utilities/addToDb";

export default function BookDetails() {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === id);
  // console.log(singleBook);
  const {
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    bookName,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (bookId) => {
    /**
     * 1. understand what to store or save: => bookId
     * 2. Where to store: database
     * 3. array, list, collection
     * 4. Check: if the book is already in the readList
     * 5. if not, then add the book to the list
     * 6. if yes, do not add the book
     */
    addToStoredReadList(bookId);
  };

  const handleWishList = (bookId) => {
    addToStoredWishList(bookId);
  };

  return (
    <div>
      <h1>BookDetails: {bookId}</h1>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="ml-0 lg:ml-16">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold font-play tracking-wider">
                  {bookName}
                </h1>
                <p className="font-work">By: {author}</p>
              </div>
              <div className="divider"></div>
              <div className="text-gray-600 font-work">Fiction</div>
              <div className="divider"></div>
              <div className="text-sm font-work">
                <span className="font-bold">Review: </span>
                <span className="text-gray-500">{review}</span>
              </div>
              <div className="flex gap-4 mt-6 items-center">
                <p className="font-bold">Tag</p>
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="text-sm font-bold bg-slate-200 px-3 py-1 rounded-lg text-lime-600 tracking-wider"
                  >
                    #<span>{tag}</span>
                  </p>
                ))}
              </div>
              <div className="divider"></div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td className="text-gray-400 text-base font-medium">
                        Number of Pages:
                      </td>
                      <td className="pl-8 font-bold">{totalPages}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-400 text-base font-medium py-3">
                        Publisher:
                      </td>
                      <td className="pl-8 font-bold">{publisher}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-400 text-base font-medium">
                        Year of Publishing:
                      </td>
                      <td className="pl-8 font-bold">{yearOfPublishing}</td>
                    </tr>
                    <tr>
                      <td className="text-gray-400 text-base font-medium py-3">
                        Rating:
                      </td>
                      <td className="pl-8 font-bold">{rating}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <button
                  onClick={() => handleMarkAsRead(bookId)}
                  className="btn btn-outline btn-accent mr-5 px-4"
                >
                  Mark as Read
                </button>
                <button
                  onClick={() => handleWishList(bookId)}
                  className="btn btn-accent px-8"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
