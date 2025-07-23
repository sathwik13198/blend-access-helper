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
  Plus
} from 'lucide-react';

interface AccessibilitySettings {
  isOpen: boolean;
  fontSize: number;
  highContrast: boolean;
  dyslexicFont: boolean;
}

const AccessibilityWidget = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    isOpen: false,
    fontSize: 100,
    highContrast: false,
    dyslexicFont: false,
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
    
    // Font size adjustment
    html.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      html.style.filter = 'contrast(150%) brightness(1.1)';
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