const Footer = () => {
  return (
    <footer className="rounded-lg">
      <div className="md:flex   ">
        <div className="md:w-1/2 w-full bg-[#1f2a38] p-5 text-white text-center">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
       
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00 </p>
        </div>
        <div className="md:w-1/2 w-full p-5 bg-[#111826] text-white text-center">
        <h1 className="text-2xl font-semibold">Social Media</h1>
        <p>Join us on social media</p>
        <p>social media icons will be come here</p>
        </div>
      </div>
      <div className="bg-black text-white text-center p-3">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
