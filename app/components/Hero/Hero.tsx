const Hero = () => {
  return (
    <section className={`w-full h-screen flex flex-col items-center justify-center
        bg-[url('../public/hero.jpg')] bg-cover bg-center`}>
        <div className="md:w-1/2 flex flex-col items-center justify-center
            px-4 py-8 mx-4 md:m-4 border border-0 rounded-lg bg-black bg-opacity-70
            opacity-0 animate-fade-in">
            <h1 className="text-4xl my-4 font-bold text-center text-white">
                Your Gateway to Futuristic Living
            </h1>
            <p className="text-md text-center text-white">
                Experience the future now with our curated collection of cutting-edge gadgets and products. From sleek smart devices to revolutionary tools, each item embodies modernity and functionality. Elevate your lifestyle and redefine the way you live, work, and play with our gadget and product lookbook.
            </p>
      </div>
    </section>
    
  )
}

export default Hero