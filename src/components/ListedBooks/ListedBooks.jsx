import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utilities/addToDb";

export default function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const allBooks = useLoaderData();

  // ideally we will directly get the read book list from the database
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);
    // worst way
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadBooks(readBookList);
  }, []);
  return (
    <div className="my-12">
      <h3 className="text-3xl text-center font-bold pb-10 font-play">
        Listed Books
      </h3>
      <div>
        <Tabs>
          <TabList className="font-work">
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl font-semibold py-4 font-work">
              Books I Read 0{readBooks.length}
            </h2>
            <div>
              {readBooks.map((readBook) => (
                <div
                  className="text-xl font-medium py-3 px-2 bg-slate-100 rounded-lg border mb-3"
                  key={readBook.bookId}
                >
                  {readBook.bookName}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl font-medium py-4 font-work">
              My Wish List
            </h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
