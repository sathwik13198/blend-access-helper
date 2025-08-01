import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, MessageCircle, Share2, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import EmbedDemo from './EmbedDemo';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import AiChatbot from '@/components/AiChatbot';

// Translation content for the entire page
const translations = {
  en: {
    hero: {
      title: 'Skillblend Accessibility Widget',
      description: 'Experience how our accessibility widget transforms the browsing experience. Use the floating button in the bottom-right corner to adjust text size, contrast, and font preferences.',
      badges: {
        accessibilityFirst: 'Accessibility First',
        wcagCompliant: 'WCAG Compliant',
        easyIntegration: 'Easy Integration'
      },
      buttons: {
        tryDemo: 'Try Demo',
        learnMore: 'Learn More'
      }
    },
    features: {
      title: 'Test the Accessibility Features',
      fontSizeControl: {
        title: 'Font Size Control',
        description: 'Adjust text size from 80% to 150% to improve readability for users with visual impairments.',
        content: 'This text will resize when you adjust the font size setting. Try increasing or decreasing the text size to see how it affects readability.',
        button: 'Example Button'
      },
      contrastControl: {
        title: 'Contrast Control',
        description: 'Adjustable contrast from 50% to 200% for better visibility and reduced eye strain.',
        content: 'When contrast is adjusted, all colors become more or less vivid and text becomes easier to distinguish from backgrounds.',
        buttons: {
          primary: 'Primary',
          secondary: 'Secondary'
        }
      },
      dyslexiaFont: {
        title: 'Dyslexia-Friendly Font',
        description: 'OpenDyslexic font designed to reduce reading errors and improve comprehension.',
        content: 'This text will change to OpenDyslexic font when the dyslexia-friendly option is enabled. The font is specially designed to make reading easier.',
        badge: 'Try Me!'
      }
    },
    gallery: {
      title: 'Image Gallery - Test Hide Images Feature',
      badges: {
        accessibilityTools: 'Accessibility Tools',
        userInterface: 'User Interface',
        inclusiveDesign: 'Inclusive Design'
      }
    },
    article: {
      title: 'Why Accessibility Matters',
      intro: 'Web accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them. This includes people with visual, auditory, motor, and cognitive disabilities.',
      links: {
        wai: 'Learn more about WAI Guidelines',
        webaim: 'WebAIM Resources',
        ada: 'ADA Compliance Information'
      },
      benefitsTitle: 'Benefits for Everyone',
      benefits: [
        'Improved readability for users with dyslexia or reading difficulties',
        'Better contrast for users with visual impairments or in bright environments',
        'Flexible text sizing for users with varying vision needs',
        'Enhanced usability for all users, not just those with disabilities'
      ],
      quote: '"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." - Tim Berners-Lee, W3C Director',
      buttons: {
        like: 'Like',
        comment: 'Comment',
        share: 'Share',
        save: 'Save'
      }
    },
    footer: 'Skillblend Accessibility Widget Demo • Built with React & Tailwind CSS'
  },
  es: {
    hero: {
      title: 'Widget de Accesibilidad Skillblend',
      description: 'Experimenta cómo nuestro widget de accesibilidad transforma la experiencia de navegación. Usa el botón flotante en la esquina inferior derecha para ajustar el tamaño del texto, contraste y preferencias de fuente.',
      badges: {
        accessibilityFirst: 'Accesibilidad Primero',
        wcagCompliant: 'Compatible con WCAG',
        easyIntegration: 'Integración Fácil'
      },
      buttons: {
        tryDemo: 'Probar Demo',
        learnMore: 'Saber Más'
      }
    },
    features: {
      title: 'Prueba las Características de Accesibilidad',
      fontSizeControl: {
        title: 'Control de Tamaño de Fuente',
        description: 'Ajusta el tamaño del texto del 80% al 150% para mejorar la legibilidad para usuarios con discapacidades visuales.',
        content: 'Este texto cambiará de tamaño cuando ajustes la configuración del tamaño de fuente. Prueba aumentar o disminuir el tamaño del texto para ver cómo afecta la legibilidad.',
        button: 'Botón de Ejemplo'
      },
      contrastControl: {
        title: 'Control de Contraste',
        description: 'Contraste ajustable del 50% al 200% para mejor visibilidad y reducción de fatiga visual.',
        content: 'Cuando se ajusta el contraste, todos los colores se vuelven más o menos vívidos y el texto se vuelve más fácil de distinguir de los fondos.',
        buttons: {
          primary: 'Primario',
          secondary: 'Secundario'
        }
      },
      dyslexiaFont: {
        title: 'Fuente Amigable para Dislexia',
        description: 'Fuente OpenDyslexic diseñada para reducir errores de lectura y mejorar la comprensión.',
        content: 'Este texto cambiará a la fuente OpenDyslexic cuando la opción amigable para dislexia esté habilitada. La fuente está especialmente diseñada para hacer la lectura más fácil.',
        badge: '¡Pruébame!'
      }
    },
    gallery: {
      title: 'Galería de Imágenes - Prueba la Función Ocultar Imágenes',
      badges: {
        accessibilityTools: 'Herramientas de Accesibilidad',
        userInterface: 'Interfaz de Usuario',
        inclusiveDesign: 'Diseño Inclusivo'
      }
    },
    article: {
      title: 'Por Qué Importa la Accesibilidad',
      intro: 'La accesibilidad web asegura que los sitios web, herramientas y tecnologías estén diseñados y desarrollados para que las personas con discapacidades puedan usarlos. Esto incluye personas con discapacidades visuales, auditivas, motoras y cognitivas.',
      links: {
        wai: 'Aprende más sobre las Directrices WAI',
        webaim: 'Recursos WebAIM',
        ada: 'Información de Cumplimiento ADA'
      },
      benefitsTitle: 'Beneficios para Todos',
      benefits: [
        'Mejor legibilidad para usuarios con dislexia o dificultades de lectura',
        'Mejor contraste para usuarios con discapacidades visuales o en ambientes brillantes',
        'Tamaño de texto flexible para usuarios con diferentes necesidades de visión',
        'Usabilidad mejorada para todos los usuarios, no solo aquellos con discapacidades'
      ],
      quote: '"El poder de la Web está en su universalidad. El acceso por parte de todos, independientemente de la discapacidad, es un aspecto esencial." - Tim Berners-Lee, Director del W3C',
      buttons: {
        like: 'Me Gusta',
        comment: 'Comentar',
        share: 'Compartir',
        save: 'Guardar'
      }
    },
    footer: 'Demo del Widget de Accesibilidad Skillblend • Construido con React y Tailwind CSS'
  }
};

const DemoContent = () => {
  // Get current language from accessibility widget
  const getCurrentLanguage = () => {
    const langFromDOM = document.documentElement.getAttribute('data-current-language') as 'en' | 'es';
    const langFromStorage = localStorage.getItem('accessibility-language') as 'en' | 'es';
    return langFromDOM || langFromStorage || 'en';
  };

  const [currentLanguage, setCurrentLanguage] = React.useState<'en' | 'es'>('en');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage(getCurrentLanguage());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 animate-pulse" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=200&h=200&fit=crop&crop=face"
              alt="Accessibility hero illustration"
              className="w-24 h-24 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="hover-scale">{t.hero.badges.accessibilityFirst}</Badge>
            <Badge variant="secondary" className="hover-scale">{t.hero.badges.wcagCompliant}</Badge>
            <Badge variant="secondary" className="hover-scale">{t.hero.badges.easyIntegration}</Badge>
          </div>
          <div className="flex gap-4 justify-center">
            <Button className="animate-bounce-in hover:scale-105 transition-all duration-300">
              <Sparkles className="h-4 w-4 mr-2" />
              {t.hero.buttons.tryDemo}
            </Button>
            <Button variant="outline" className="hover:scale-105 transition-all duration-300">
              <ExternalLink className="h-4 w-4 mr-2" />
              {t.hero.buttons.learnMore}
            </Button>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t.features.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=60&h=60&fit=crop"
                    alt="Text sizing illustration"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <CardTitle className="text-xl">{t.features.fontSizeControl.title}</CardTitle>
                </div>
                <CardDescription>
                  {t.features.fontSizeControl.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.features.fontSizeControl.content}
                </p>
                <a href="#demo" className="inline-block w-full">
                  <Button variant="outline" className="w-full hover:scale-105 transition-all">
                    {t.features.fontSizeControl.button}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=60&h=60&fit=crop"
                    alt="Contrast adjustment illustration"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <CardTitle className="text-xl">{t.features.contrastControl.title}</CardTitle>
                </div>
                <CardDescription>
                  {t.features.contrastControl.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.features.contrastControl.content}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="hover:scale-105 transition-all">{t.features.contrastControl.buttons.primary}</Button>
                  <Button variant="secondary" size="sm" className="hover:scale-105 transition-all">{t.features.contrastControl.buttons.secondary}</Button>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card className="hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop"
                    alt="Dyslexia-friendly font illustration"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <CardTitle className="text-xl">{t.features.dyslexiaFont.title}</CardTitle>
                </div>
                <CardDescription>
                  {t.features.dyslexiaFont.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.features.dyslexiaFont.content}
                </p>
                <Badge className="hover:scale-105 transition-all">{t.features.dyslexiaFont.badge}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            {t.gallery.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
                alt="Person using assistive technology"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="text-white">{t.gallery.badges.accessibilityTools}</Badge>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                alt="Digital accessibility interface"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="text-white">{t.gallery.badges.userInterface}</Badge>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
                alt="Inclusive design workspace"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="text-white">{t.gallery.badges.inclusiveDesign}</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t.article.title}
            </h2>
            
            <p className="text-muted-foreground mb-6">
              {t.article.intro}
            </p>

            <div className="flex gap-4 mb-6">
              <a href="https://www.w3.org/WAI/" className="story-link text-primary hover:underline">
                {t.article.links.wai}
              </a>
              <a href="https://webaim.org/" className="story-link text-primary hover:underline">
                {t.article.links.webaim}
              </a>
              <a href="https://www.ada.gov/" className="story-link text-primary hover:underline">
                {t.article.links.ada}
              </a>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {t.article.benefitsTitle}
            </h3>
            
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              {t.article.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground my-8 animate-slide-in-right">
              {t.article.quote}
            </blockquote>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Heart className="h-4 w-4" />
                {t.article.buttons.like}
              </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-4 w-4" />
                {t.article.buttons.comment}
              </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Share2 className="h-4 w-4" />
                {t.article.buttons.share}
              </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Star className="h-4 w-4" />
                {t.article.buttons.save}
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Embed Demo Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <EmbedDemo />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            {t.footer}
          </p>
        </div>
      </footer>

      {/* Accessibility Widget */}
      <AccessibilityWidget />
      
      {/* AI Chatbot - separate from accessibility widget */}
      <AiChatbot language={currentLanguage} />
    </div>
  );
};

export default DemoContent;