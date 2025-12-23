import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Book {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
}

interface CartItem extends Book {
  quantity: number;
}

const Index = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const books: Book[] = [
    {
      id: 1,
      title: 'Современная психология',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 890,
      oldPrice: 1250,
      discount: 29
    },
    {
      id: 2,
      title: 'История Адыгеи',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/b544bd76-27b5-45b5-9cfb-9b6922c615df.jpg',
      price: 1190,
      oldPrice: 1600,
      discount: 26
    },
    {
      id: 3,
      title: 'Математический анализ',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1450,
      oldPrice: 1900,
      discount: 24
    },
    {
      id: 4,
      title: 'Основы программирования',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1290,
      oldPrice: 1750,
      discount: 26
    },
    {
      id: 5,
      title: 'Культурология',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/b544bd76-27b5-45b5-9cfb-9b6922c615df.jpg',
      price: 790,
      oldPrice: 1100,
      discount: 28
    },
    {
      id: 6,
      title: 'Экономическая теория',
      image: 'https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/e75804a0-37da-4591-91a0-d70df74f1e5b.jpg',
      price: 1350,
      oldPrice: 1800,
      discount: 25
    }
  ];

  const addToCart = (book: Book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="BookOpen" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Издательство АГУ</h1>
                <p className="text-xs text-muted-foreground">Книги для студентов</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <button onClick={() => navigate('/catalog')} className="text-sm font-medium hover:text-primary transition-colors">Каталог</button>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О издательстве</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <Icon name="ShoppingCart" size={20} />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-secondary text-white border-0 px-2">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative h-[500px] overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/afe82fa4-5c61-429f-9438-2215f2c5b128/files/2b389e99-4237-4777-81da-352c7e1672a8.jpg"
          alt="Адыгейский государственный университет"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-600/70 to-orange-500/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Издательство АГУ
            </h2>
            <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
              Качественная учебная литература для студентов
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/catalog')}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6"
            >
              Посмотреть каталог
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2 text-sm">
              🔥 Новинки
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Книги со скидками
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Актуальные учебные пособия с выгодными предложениями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <Card 
                key={book.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <h3 className="text-xl font-bold mb-4 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">{book.price} ₽</span>
                    <span className="text-lg text-muted-foreground line-through">{book.oldPrice} ₽</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    onClick={() => addToCart(book)}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-lg"
                  >
                    <Icon name="ShoppingBag" className="mr-2" size={20} />
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-accent to-secondary text-white border-0 px-4 py-2 text-sm">
                📚 О нас
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                История издательства
              </h2>
            </div>
            <Card className="border-2 border-purple-100 shadow-xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    Издательство Адыгейского государственного университета было основано в 1952 году 
                    и за это время стало одним из ведущих учебных издательств региона.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                    Мы специализируемся на выпуске качественной учебной и научной литературы, 
                    которая помогает студентам получать актуальные знания и развивать профессиональные навыки.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    Наши книги написаны ведущими преподавателями университета и соответствуют 
                    современным образовательным стандартам. Мы постоянно обновляем ассортимент, 
                    следим за новыми трендами и предлагаем студентам выгодные условия покупки.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-purple-100">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">70+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Изданных книг</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">15K+</div>
                    <div className="text-sm text-muted-foreground">Студентов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2 text-sm">
              📍 Контакты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Как нас найти
            </h2>
            <p className="text-lg text-muted-foreground">
              Адыгейский государственный университет, г. Майкоп
            </p>
          </div>
          <Card className="max-w-5xl mx-auto overflow-hidden border-2 border-purple-100 shadow-xl animate-scale-in">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=40.108074%2C44.610226&mode=search&oid=1248339774&ol=biz&z=16"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-50 to-orange-50">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Майкоп, ул. Первомайская, 208</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (8772) 52-28-39</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">publish@adygnet.ru</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-900 to-orange-600 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="BookOpen" size={24} />
            <span className="text-xl font-bold">Издательство АГУ</span>
          </div>
          <p className="text-white/80">© 2024 Адыгейский государственный университет. Все права защищены.</p>
        </div>
      </footer>

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 animate-fade-in" onClick={() => setIsCartOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-purple-100 p-6 z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold">Корзина</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsCartOpen(false)}
                  className="hover:bg-purple-100"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {cartItemCount > 0 ? `${cartItemCount} ${cartItemCount === 1 ? 'товар' : 'товара'}` : 'Корзина пуста'}
              </p>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="ShoppingCart" className="text-primary" size={48} />
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">Корзина пуста</p>
                  <p className="text-sm text-muted-foreground">Добавьте книги из каталога</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <Card key={item.id} className="border-purple-100">
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-28 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold mb-2 line-clamp-2">{item.title}</h4>
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-lg font-bold text-primary">{item.price} ₽</div>
                                  <div className="text-sm text-muted-foreground">Количество: {item.quantity}</div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFromCart(item.id)}
                                  className="hover:bg-red-50 hover:text-red-500"
                                >
                                  <Icon name="Trash2" size={18} />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="border-t border-purple-100 pt-6 sticky bottom-0 bg-white">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-semibold">Итого:</span>
                      <span className="text-3xl font-bold text-primary">{getTotalPrice()} ₽</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-6 text-lg">
                      Оформить заказ
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;