export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury perfume bottles"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Your Signature Scent
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Explore our curated collection of luxury fragrances, crafted by master perfumers 
          using the finest ingredients from around the world.
        </p>
        <div className="mt-10">
          <button className="inline-block bg-white text-gray-900 px-8 py-3 border border-transparent text-base font-medium rounded-md hover:bg-gray-100 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
}