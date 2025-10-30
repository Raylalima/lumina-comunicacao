import { MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BusinessSectionProps {
  isDark: boolean;
}

const businesses = [
  {
    name: 'Café Aconchego',
    category: 'Cafeteria',
    location: 'Centro',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1725859685127-c723ea1d32a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2MDUxMjIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Restaurante Sabor Local',
    category: 'Restaurante',
    location: 'Bairro Alto',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1657593088889-5105c637f2a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwYXJlYXxlbnwxfHx8fDE3NjA0NTI1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Loja Vida Nova',
    category: 'Varejo',
    location: 'Vila Maria',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1568386435718-8dbb78169d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYwNTUxMTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Barbearia Estilo',
    category: 'Barbearia',
    location: 'Jardim das Flores',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1667539916609-c706d5b7ed65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYwNTIzNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Livraria Página Virada',
    category: 'Livraria',
    location: 'Centro Histórico',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1640698902630-0a8ac20cc35a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc3RvcmUlMjBzaGVsdmVzfGVufDF8fHx8MTc2MDU1MTExNHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Mercadinho da Esquina',
    category: 'Mercado',
    location: 'Vila Nova',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1612012060786-58a0bf29474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGxvY2FsJTIwYnVzaW5lc3MlMjBzdG9yZWZyb250fGVufDF8fHx8MTc2MDU1MTExMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BusinessSection({ isDark }: BusinessSectionProps) {
  return (
    <section id="comercios" className={`py-20 ${isDark ? 'bg-zinc-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Comércios em Destaque
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Conheça os negócios locais que estão transformando suas comunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                isDark ? 'bg-zinc-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group`}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={business.image}
                  alt={business.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{business.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {business.name}
                </h3>
                <p className={`mb-3 ${isDark ? 'text-yellow-400' : 'text-red-500'}`}>
                  {business.category}
                </p>
                <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <MapPin className="w-4 h-4" />
                  <span>{business.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
