/* eslint-disable react/prop-types */

const ItemViewer = ({ manu }) => {
  const { name, image, recipe, price } = manu;
  return (
    <div className="flex  gap-5">
      <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[110px]" src={image} alt="" />
      <div>
        <p>{name}</p>
        <p>{recipe}</p>
      </div>
      <p className="text-[#D99904] text-xl font-semibold">${price}</p>
    </div>
  );
};

export default ItemViewer;
