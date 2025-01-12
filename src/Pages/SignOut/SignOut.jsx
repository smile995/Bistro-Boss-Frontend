import woodBg from "../../assets/reservation/wood-grain-pattern-gray1x.png"

const SignOut = () => {
  return (
    <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${woodBg})`, // Use the imported image
            backgroundSize: "cover", // Optional: Cover the entire container
            backgroundPosition: "center", // Optional: Center the image
            backgroundRepeat: "no-repeat", // Optional: Prevent repeating
          }}
        >
          {/* Add your content here */}
        </div>
  )
}

export default SignOut