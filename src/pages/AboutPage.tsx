export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Essence</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=2000"
              alt="Our perfume laboratory"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 1970, Essence has been at the forefront of luxury perfumery for over five decades. 
              Our commitment to quality, creativity, and sustainability has made us a leader in the fragrance industry.
            </p>
            <p className="text-gray-600">
              Each fragrance is carefully crafted in our laboratory by master perfumers who combine traditional 
              techniques with modern innovation to create unique and captivating scents.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">
              We source only the finest ingredients from sustainable suppliers worldwide.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Craftsmanship</h3>
            <p className="text-gray-600">
              Each fragrance is carefully blended and aged to perfection.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We combine traditional techniques with modern technology.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices in every aspect of our business, 
                from ingredient sourcing to packaging.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, ensuring each product 
                meets our high standards of quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}