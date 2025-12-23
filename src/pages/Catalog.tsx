import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
}

const Catalog = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const allBooks: Book[] = [
    {
      id: 1,
      title: 'Современная психология',
      author: 'Петров А.И.',
      genre: 'Психология',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 890,
      oldPrice: 1250,
      discount: 29
    },
    {
      id: 2,
      title: 'История Адыгеи',
      author: 'Иванова М.С.',
      genre: 'История',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/b544bd76-27b5-45b5-9cfb-9b6922c615df.jpg',
      price: 1190,
      oldPrice: 1600,
      discount: 26
    },
    {
      id: 3,
      title: 'Математический анализ',
      author: 'Смирнов В.П.',
      genre: 'Математика',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1450,
      oldPrice: 1900,
      discount: 24
    },
    {
      id: 4,
      title: 'Основы программирования',
      author: 'Кузнецов Д.А.',
      genre: 'Информатика',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1290,
      oldPrice: 1750,
      discount: 26
    },
    {
      id: 5,
      title: 'Культурология',
      author: 'Соколова Н.В.',
      genre: 'Культурология',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/b544bd76-27b5-45b5-9cfb-9b6922c615df.jpg',
      price: 790,
      oldPrice: 1100,
      discount: 28
    },
    {
      id: 6,
      title: 'Экономическая теория',
      author: 'Морозов К.Л.',
      genre: 'Экономика',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1350,
      oldPrice: 1800,
      discount: 25
    },
    {
      id: 7,
      title: 'Социальная философия',
      author: 'Петров А.И.',
      genre: 'Философия',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 950,
      oldPrice: 1300,
      discount: 27
    },
    {
      id: 8,
      title: 'Русская литература XIX века',
      author: 'Иванова М.С.',
      genre: 'Литература',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/b544bd76-27b5-45b5-9cfb-9b6922c615df.jpg',
      price: 1100,
      oldPrice: 1500,
      discount: 27
    },
    {
      id: 9,
      title: 'Дифференциальные уравнения',
      author: 'Смирнов В.П.',
      genre: 'Математика',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1550,
      oldPrice: 2000,
      discount: 23
    },
    {
      id: 10,
      title: 'Базы данных',
      author: 'Кузнецов Д.А.',
      genre: 'Информатика',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1250,
      oldPrice: 1650,
      discount: 24
    },
    {
      id: 11,
      title: 'Педагогическая психология',
      author: 'Петров А.И.',
      genre: 'Психология',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 920,
      oldPrice: 1280,
      discount: 28
    },
    {
      id: 12,
      title: 'Макроэкономика',
      author: 'Морозов К.Л.',
      genre: 'Экономика',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1380,
      oldPrice: 1850,
      discount: 25
    }
  ];

  const authors = Array.from(new Set(allBooks.map(book => book.author))).sort();
  const genres = Array.from(new Set(allBooks.map(book => book.genre))).sort();

  const toggleAuthor = (author: string) => {
    setSelectedAuthors(prev =>
      prev.includes(author) ? prev.filter(a => a !== author) : [...prev, author]
    );
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const filteredBooks = allBooks.filter(book => {
    const priceMatch = book.price >= priceRange[0] && book.price <= priceRange[1];
    const authorMatch = selectedAuthors.length === 0 || selectedAuthors.includes(book.author);
    const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(book.genre);
    return priceMatch && authorMatch && genreMatch;
  });

  const resetFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedAuthors([]);
    setSelectedGenres([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate('/')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="BookOpen" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Издательство АГУ</h1>
                <p className="text-xs text-muted-foreground">Книги для студентов</p>
              </div>
            </button>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => navigate('/')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button className="text-sm font-medium text-primary">Каталог</button>
              <a href="/#about" className="text-sm font-medium hover:text-primary transition-colors">О издательстве</a>
              <a href="/#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2 text-sm">
            📚 Каталог
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Все книги издательства
          </h2>
          <p className="text-lg text-muted-foreground">
            Найдено книг: {filteredBooks.length}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 flex-shrink-0">
            <Card className="sticky top-24 border-2 border-purple-100 shadow-lg animate-scale-in">
              <CardHeader className="border-b border-purple-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Icon name="SlidersHorizontal" size={20} className="text-primary" />
                    Фильтры
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="text-xs hover:text-primary"
                  >
                    Сбросить
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                <div className="space-y-4">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Icon name="DollarSign" size={16} className="text-secondary" />
                    Цена: {priceRange[0]} - {priceRange[1]} ₽
                  </Label>
                  <Slider
                    min={0}
                    max={2000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0 ₽</span>
                    <span>2000 ₽</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-purple-100">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Icon name="User" size={16} className="text-primary" />
                    Авторы
                  </Label>
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                    {authors.map((author) => (
                      <div key={author} className="flex items-center space-x-2">
                        <Checkbox
                          id={`author-${author}`}
                          checked={selectedAuthors.includes(author)}
                          onCheckedChange={() => toggleAuthor(author)}
                          className="border-2"
                        />
                        <label
                          htmlFor={`author-${author}`}
                          className="text-sm cursor-pointer hover:text-primary transition-colors flex-1"
                        >
                          {author}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-purple-100">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Icon name="BookMarked" size={16} className="text-accent" />
                    Жанры
                  </Label>
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                    {genres.map((genre) => (
                      <div key={genre} className="flex items-center space-x-2">
                        <Checkbox
                          id={`genre-${genre}`}
                          checked={selectedGenres.includes(genre)}
                          onCheckedChange={() => toggleGenre(genre)}
                          className="border-2"
                        />
                        <label
                          htmlFor={`genre-${genre}`}
                          className="text-sm cursor-pointer hover:text-primary transition-colors flex-1"
                        >
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <main className="flex-1">
            {filteredBooks.length === 0 ? (
              <Card className="border-2 border-purple-100 animate-fade-in">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Search" className="text-primary" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Книги не найдены</h3>
                  <p className="text-muted-foreground mb-6">Попробуйте изменить параметры фильтров</p>
                  <Button onClick={resetFilters} className="bg-gradient-to-r from-primary to-accent">
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBooks.map((book, index) => (
                  <Card
                    key={book.id}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-scale-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardHeader className="p-0 relative overflow-hidden">
                      <Badge className="absolute top-4 right-4 z-10 bg-secondary text-white border-0 font-bold text-sm">
                        -{book.discount}%
                      </Badge>
                      <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-100 to-orange-100">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="User" size={14} className="text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                      </div>
                      <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                        {book.genre}
                      </Badge>
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-primary">{book.price} ₽</span>
                        <span className="text-lg text-muted-foreground line-through">{book.oldPrice} ₽</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-lg"
                      >
                        <Icon name="ShoppingBag" className="mr-2" size={20} />
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
