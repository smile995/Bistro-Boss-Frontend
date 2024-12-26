import banner from "../../assets/menu/banner3.jpg";

const ItemCover = () => {
  return (
    <div className="relative mb-10">
      <div>
        <img className="h-[400px] md:h-[600px] w-full object-cover rounded" src={banner} alt="" />
      </div>
      <div className="bg-black bg-opacity-70 text-white w-4/5 sm:w-3/5 md:w-2/5 mx-auto text-center p-4 md:h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        make this div center on the image
      </div>
    </div>
  );
};

export default ItemCover;
