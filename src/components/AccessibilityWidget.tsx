import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { 
  Accessibility, 
  Type, 
  Eye, 
  Palette,
  Settings,
  X,
  Minus,
  Plus,
  Link,
  AlignLeft,
  Play,
  ImageOff,
  MousePointer,
  List,
  Moon,
  Sun
} from 'lucide-react';

interface AccessibilitySettings {
  isOpen: boolean;
  fontSize: number;
  highContrast: boolean;
  dyslexicFont: boolean;
  highlightLinks: boolean;
  textSpacing: boolean;
  pauseAnimations: boolean;
  hideImages: boolean;
  largeCursor: boolean;
  pageStructure: boolean;
  darkMode: boolean;
}

const AccessibilityWidget = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    isOpen: false,
    fontSize: 100,
    highContrast: false,
    dyslexicFont: false,
    highlightLinks: false,
    textSpacing: false,
    pauseAnimations: false,
    hideImages: false,
    largeCursor: false,
    pageStructure: false,
    darkMode: false,
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(prev => ({ ...prev, ...parsed }));
      applySettings(parsed);
    }
  }, []);

  // Save settings to localStorage and apply them
  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('accessibility-settings', JSON.stringify(updated));
    applySettings(updated);
  };

  // Apply accessibility settings to the document
  const applySettings = (settings: AccessibilitySettings) => {
    const html = document.documentElement;
    const body = document.body;
    
    // Font size adjustment
    html.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      html.style.filter = 'contrast(120%)';
    } else {
      html.style.filter = 'none';
    }
    
    // Dyslexic font
    if (settings.dyslexicFont) {
      loadDyslexicFont();
      html.style.fontFamily = '"OpenDyslexic", sans-serif';
    } else {
      html.style.fontFamily = '';
    }

    // Dark mode toggle
    if (settings.darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Highlight links
    updateStyleRule('highlight-links', settings.highlightLinks ? 
      'a { border-bottom: 2px solid #FF0000 !important; }' : '');

    // Text spacing
    updateStyleRule('text-spacing', settings.textSpacing ? 
      '* { letter-spacing: 0.12em !important; line-height: 1.5 !important; }' : '');

    // Pause animations
    updateStyleRule('pause-animations', settings.pauseAnimations ? 
      '*, *::before, *::after { animation-delay: -1ms !important; animation-duration: 1ms !important; animation-iteration-count: 1 !important; background-attachment: initial !important; scroll-behavior: auto !important; }' : '');

    // Hide images
    updateStyleRule('hide-images', settings.hideImages ? 
      'img { visibility: hidden !important; }' : '');

    // Large cursor
    if (settings.largeCursor) {
      body.style.cursor = 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M2 2 L2 28 L12 18 L18 24 L22 20 L16 14 L26 14 Z\' fill=\'%23000\' stroke=\'%23fff\' stroke-width=\'2\'/%3E%3C/svg%3E") 16 16, auto';
    } else {
      body.style.cursor = '';
    }

    // Page structure outline
    updateStyleRule('page-structure', settings.pageStructure ? 
      'h1, h2, h3, h4, h5, h6 { outline: 2px solid #007cba !important; outline-offset: 2px !important; }' : '');
  };

  // Helper function to update CSS rules
  const updateStyleRule = (id: string, css: string) => {
    let style = document.getElementById(`accessibility-${id}`);
    if (!style && css) {
      style = document.createElement('style');
      style.id = `accessibility-${id}`;
      document.head.appendChild(style);
    }
    if (style) {
      style.textContent = css;
      if (!css) {
        style.remove();
      }
    }
  };

  // Load OpenDyslexic font
  const loadDyslexicFont = () => {
    if (!document.querySelector('#opendyslexic-font')) {
      const link = document.createElement('link');
      link.id = 'opendyslexic-font';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/opendyslexic@latest/opendyslexic.css';
      document.head.appendChild(link);
    }
  };

  const adjustFontSize = (direction: 'increase' | 'decrease') => {
    const change = direction === 'increase' ? 10 : -10;
    const newSize = Math.max(80, Math.min(150, settings.fontSize + change));
    updateSettings({ fontSize: newSize });
  };

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 100,
      highContrast: false,
      dyslexicFont: false,
      highlightLinks: false,
      textSpacing: false,
      pauseAnimations: false,
      hideImages: false,
      largeCursor: false,
      pageStructure: false,
      darkMode: false,
    };
    updateSettings(defaultSettings);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Control Panel */}
      {settings.isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 bg-widget-background border-widget-border shadow-widget animate-slide-up">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Accessibility
                </h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateSettings({ isOpen: false })}
                className="h-8 w-8 p-0"
                aria-label="Close accessibility panel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              {/* Font Size */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Text Size
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustFontSize('decrease')}
                    disabled={settings.fontSize <= 80}
                    className="h-8 w-8 p-0"
                    aria-label="Decrease text size"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                    {settings.fontSize}%
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => adjustFontSize('increase')}
                    disabled={settings.fontSize >= 150}
                    className="h-8 w-8 p-0"
                    aria-label="Increase text size"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    High Contrast
                  </label>
                </div>
                <Switch
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => updateSettings({ highContrast: checked })}
                  aria-label="Toggle high contrast mode"
                />
              </div>

              <Separator />

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {settings.darkMode ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-primary" />}
                  <label className="text-sm font-medium text-foreground">
                    Dark Mode
                  </label>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) => updateSettings({ darkMode: checked })}
                  aria-label="Toggle dark mode"
                />
              </div>

              <Separator />

              {/* Dyslexic Font */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Dyslexia-Friendly Font
                  </label>
                </div>
                <Switch
                  checked={settings.dyslexicFont}
                  onCheckedChange={(checked) => updateSettings({ dyslexicFont: checked })}
                  aria-label="Toggle dyslexia-friendly font"
                />
              </div>

              <Separator />

              {/* Highlight Links */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Highlight Links
                  </label>
                </div>
                <Switch
                  checked={settings.highlightLinks}
                  onCheckedChange={(checked) => updateSettings({ highlightLinks: checked })}
                  aria-label="Toggle link highlighting"
                />
              </div>

              <Separator />

              {/* Text Spacing */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlignLeft className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Text Spacing
                  </label>
                </div>
                <Switch
                  checked={settings.textSpacing}
                  onCheckedChange={(checked) => updateSettings({ textSpacing: checked })}
                  aria-label="Toggle text spacing"
                />
              </div>

              <Separator />

              {/* Pause Animations */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Pause Animations
                  </label>
                </div>
                <Switch
                  checked={settings.pauseAnimations}
                  onCheckedChange={(checked) => updateSettings({ pauseAnimations: checked })}
                  aria-label="Toggle animation pausing"
                />
              </div>

              <Separator />

              {/* Hide Images */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ImageOff className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Hide Images
                  </label>
                </div>
                <Switch
                  checked={settings.hideImages}
                  onCheckedChange={(checked) => updateSettings({ hideImages: checked })}
                  aria-label="Toggle image visibility"
                />
              </div>

              <Separator />

              {/* Large Cursor */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MousePointer className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Large Cursor
                  </label>
                </div>
                <Switch
                  checked={settings.largeCursor}
                  onCheckedChange={(checked) => updateSettings({ largeCursor: checked })}
                  aria-label="Toggle large cursor"
                />
              </div>

              <Separator />

              {/* Page Structure */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <List className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium text-foreground">
                    Page Structure
                  </label>
                </div>
                <Switch
                  checked={settings.pageStructure}
                  onCheckedChange={(checked) => updateSettings({ pageStructure: checked })}
                  aria-label="Toggle page structure outline"
                />
              </div>

              <Separator />

              {/* Reset Button */}
              <Button
                variant="outline"
                onClick={resetSettings}
                className="w-full"
              >
                Reset to Default
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => updateSettings({ isOpen: !settings.isOpen })}
        className="h-14 w-14 rounded-full shadow-button animate-bounce-in hover:scale-105 transition-all duration-300"
        aria-label={settings.isOpen ? 'Close accessibility options' : 'Open accessibility options'}
        aria-expanded={settings.isOpen}
      >
        <Accessibility className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default AccessibilityWidget;