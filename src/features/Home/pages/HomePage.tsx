export function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Bienvenido a LibrosMundo
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Novedades</h2>
          <p className="text-gray-600">
            Descubre los últimos lanzamientos en literatura
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Más Vendidos</h2>
          <p className="text-gray-600">
            Los libros favoritos de nuestros lectores
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Ofertas</h2>
          <p className="text-gray-600">
            Grandes descuentos en una selección especial
          </p>
        </div>
      </div>
    </div>
  );
}
