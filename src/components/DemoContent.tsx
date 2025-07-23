import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, MessageCircle, Share2, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

const DemoContent = () => {
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
            Skillblend Accessibility Widget
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Experience how our accessibility widget transforms the browsing experience. 
            Use the floating button in the bottom-right corner to adjust text size, 
            contrast, and font preferences.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="hover-scale">Accessibility First</Badge>
            <Badge variant="secondary" className="hover-scale">WCAG Compliant</Badge>
            <Badge variant="secondary" className="hover-scale">Easy Integration</Badge>
          </div>
          <div className="flex gap-4 justify-center">
            <Button className="animate-bounce-in hover:scale-105 transition-all duration-300">
              <Sparkles className="h-4 w-4 mr-2" />
              Try Demo
            </Button>
            <Button variant="outline" className="hover:scale-105 transition-all duration-300">
              <ExternalLink className="h-4 w-4 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Test the Accessibility Features
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
                  <CardTitle className="text-xl">Font Size Control</CardTitle>
                </div>
                <CardDescription>
                  Adjust text size from 80% to 150% to improve readability for users with visual impairments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This text will resize when you adjust the font size setting. 
                  Try increasing or decreasing the text size to see how it affects readability.
                </p>
                <a href="#demo" className="inline-block w-full">
                  <Button variant="outline" className="w-full hover:scale-105 transition-all">
                    Example Button
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
                  <CardTitle className="text-xl">Contrast Control</CardTitle>
                </div>
                <CardDescription>
                  Adjustable contrast from 50% to 200% for better visibility and reduced eye strain.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  When contrast is adjusted, all colors become more or less vivid 
                  and text becomes easier to distinguish from backgrounds.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="hover:scale-105 transition-all">Primary</Button>
                  <Button variant="secondary" size="sm" className="hover:scale-105 transition-all">Secondary</Button>
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
                  <CardTitle className="text-xl">Dyslexia-Friendly Font</CardTitle>
                </div>
                <CardDescription>
                  OpenDyslexic font designed to reduce reading errors and improve comprehension.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This text will change to OpenDyslexic font when the dyslexia-friendly 
                  option is enabled. The font is specially designed to make reading easier.
                </p>
                <Badge className="hover:scale-105 transition-all">Try Me!</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Image Gallery - Test Hide Images Feature
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
                alt="Person using assistive technology"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="text-white">Accessibility Tools</Badge>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                alt="Digital accessibility interface"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="text-white">User Interface</Badge>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
                alt="Inclusive design workspace"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="text-white">Inclusive Design</Badge>
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
              Why Accessibility Matters
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Web accessibility ensures that websites, tools, and technologies are designed 
              and developed so that people with disabilities can use them. This includes 
              people with visual, auditory, motor, and cognitive disabilities.
            </p>

            <div className="flex gap-4 mb-6">
              <a href="https://www.w3.org/WAI/" className="story-link text-primary hover:underline">
                Learn more about WAI Guidelines
              </a>
              <a href="https://webaim.org/" className="story-link text-primary hover:underline">
                WebAIM Resources
              </a>
              <a href="https://www.ada.gov/" className="story-link text-primary hover:underline">
                ADA Compliance Information
              </a>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Benefits for Everyone
            </h3>
            
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Improved readability for users with dyslexia or reading difficulties</li>
              <li>Better contrast for users with visual impairments or in bright environments</li>
              <li>Flexible text sizing for users with varying vision needs</li>
              <li>Enhanced usability for all users, not just those with disabilities</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground my-8 animate-slide-in-right">
              "The power of the Web is in its universality. Access by everyone regardless 
              of disability is an essential aspect." - Tim Berners-Lee, W3C Director
            </blockquote>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Heart className="h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-4 w-4" />
                Comment
              </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <Star className="h-4 w-4" />
                Save
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            Skillblend Accessibility Widget Demo • Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DemoContent;