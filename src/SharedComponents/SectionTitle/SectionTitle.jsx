/* eslint-disable react/prop-types */
const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="md:w-1/3 space-y-2 mx-auto text-center my-4">
      <p className="text-[#D99904]"> - - - {subheading} - - -</p>
      <div className="py-3 border-y-4">
        <p className="uppercase text-3xl font-semibold">{heading}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
