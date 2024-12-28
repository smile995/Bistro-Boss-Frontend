/* eslint-disable react/prop-types */

const ItemCover = ({img, title, tag,descrition}) => {
  return (
    <div className="relative mb-10">
      <div>
        <img className="h-[400px] md:h-[600px] w-full object-cover rounded" src={img} alt="" />
      </div>
      <div className="bg-black bg-opacity-60 text-white w-4/5 sm:w-3/5 md:w-2/5 mx-auto text-center md:py-16 py-10 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg space-y-3">
        <h1 className="md:text-4xl font-bold text-2xl uppercase">{title}</h1>
        <p className="font-semibold text-lg uppercase">{tag}</p>
        <p className="capitalize">{descrition}</p>
      </div>
    </div>
  );
};

export default ItemCover;
