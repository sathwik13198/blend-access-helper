import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Star, MessageCircle, Share2 } from 'lucide-react';

const DemoContent = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Skillblend Accessibility Widget
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience how our accessibility widget transforms the browsing experience. 
            Use the floating button in the bottom-right corner to adjust text size, 
            contrast, and font preferences.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="secondary">Accessibility First</Badge>
            <Badge variant="secondary">WCAG Compliant</Badge>
            <Badge variant="secondary">Easy Integration</Badge>
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
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Font Size Control</CardTitle>
                <CardDescription>
                  Adjust text size from 80% to 150% to improve readability for users with visual impairments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This text will resize when you adjust the font size setting. 
                  Try increasing or decreasing the text size to see how it affects readability.
                </p>
                <Button variant="outline" className="w-full">
                  Example Button
                </Button>
              </CardContent>
            </Card>

            {/* Feature Card 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">High Contrast Mode</CardTitle>
                <CardDescription>
                  Enhanced contrast for better visibility and reduced eye strain.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  When high contrast mode is enabled, all colors become more vivid 
                  and text becomes easier to distinguish from backgrounds.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                </div>
              </CardContent>
            </Card>

            {/* Feature Card 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dyslexia-Friendly Font</CardTitle>
                <CardDescription>
                  OpenDyslexic font designed to reduce reading errors and improve comprehension.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  This text will change to OpenDyslexic font when the dyslexia-friendly 
                  option is enabled. The font is specially designed to make reading easier.
                </p>
                <Badge>Try Me!</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Accessibility Matters
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Web accessibility ensures that websites, tools, and technologies are designed 
              and developed so that people with disabilities can use them. This includes 
              people with visual, auditory, motor, and cognitive disabilities.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Benefits for Everyone
            </h3>
            
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Improved readability for users with dyslexia or reading difficulties</li>
              <li>Better contrast for users with visual impairments or in bright environments</li>
              <li>Flexible text sizing for users with varying vision needs</li>
              <li>Enhanced usability for all users, not just those with disabilities</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-6 italic text-foreground my-8">
              "The power of the Web is in its universality. Access by everyone regardless 
              of disability is an essential aspect." - Tim Berners-Lee, W3C Director
            </blockquote>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Like
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Comment
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
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