const FoodCard = () => {
  return (
    <div className=" bg-[#f2f2f2] rounded">
      <figure>
        <img className=" rounded-t"
          src="https://i.ibb.co.com/hZKbMsr/salad-bg.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold">Caeser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions justify-center">
          <button className="text-[#BB8506] uppercase bg-[#e8e8e8] rounded py-3 px-4 font-semibold border-b-2 border-[#BB8506] hover:bg-[#1F2937]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
