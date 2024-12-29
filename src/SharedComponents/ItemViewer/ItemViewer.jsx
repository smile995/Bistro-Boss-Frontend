/* eslint-disable react/prop-types */

const ItemViewer = ({ manu }) => {
  const { name, image, recipe, price } = manu;
  return (
     <div className="flex  md:gap-8 gap-3">
      <img style={{borderRadius:"0px 200px 200px 200px"}} className="md:w-[100px] w-[75px]" src={image} alt="" />
      <div>
        <p className="md:text-2xl uppercase text-[#141414] ">{name} ----</p>
        <p className="text-[#b5b5b5] ">{recipe}</p>
      </div>
      <p className="text-[#D99904] text-xl ">${price}</p>
    </div>
  );
};

export default ItemViewer;
