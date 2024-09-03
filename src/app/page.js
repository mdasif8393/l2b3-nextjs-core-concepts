import NavBar from "./shared/Navbar/page";

export const metadata = {
  title: "Home Page",
  description: "Home page with nextjs"
}

export default async function Home() {
  const data = await fetch("http://localhost:5000/shoes");
  const shoes = await data.json();

  return (
    <div>
      <NavBar />
      <div className="flex justify-between p-5">
        {
          shoes.slice(0, 3).map(shoe =>
            <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{shoe.title}</h2>
                <p>{shoe.description}</p>
                <p>$ {shoe.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>)
        }
      </div>
    </div>
  );
}
