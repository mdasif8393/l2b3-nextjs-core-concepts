
const AllShoes = async () => {
    const res = await fetch("http://localhost:5000/shoes", {
        cache: "no-store"
    });
    const data = await res.json();
    return (
        <div>
            <h1 className="text-center text-2xl">All Shoes</h1>
            <div className="grid grid-cols-3 gap-3 p-5">
                {
                    data.map(shoe =>
                        <div key={shoe.id} className="card bg-base-100 w-80 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{shoe.title}</h2>
                                <p>{shoe.description}</p>
                                <p className="text-red-600 font-bold">$  {shoe.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-outline btn-primary">Buy Now</button>
                                    <button className="btn btn-outline btn-primary">Details</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllShoes;