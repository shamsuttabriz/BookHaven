import bookImg from "../../assets/books.jpg";

export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bookImg} className="max-w-full rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
