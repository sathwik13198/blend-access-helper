import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Code, Eye } from 'lucide-react';

const EmbedDemo = () => {
  const [copied, setCopied] = useState(false);
  const [previewMode, setPreviewMode] = useState<'script' | 'cdn'>('script');

  const scriptTag = `<script src="/widget.js" data-auto-init="true"></script>`;
  
  const cdnScript = `<!-- CDN Integration - Replace with your actual CDN URL -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/accessibility-widget@latest/dist-embed/widget.umd.js" data-auto-init="true"></script>`;
  
  const manualInit = `<script src="/widget.js" data-auto-init="false"></script>
<script>
  // Manual initialization with options
  window.SkillblendA11y.init({
    position: 'bottom-right', // bottom-left, top-right, top-left
    theme: 'auto' // light, dark, auto
  });
  
  // Optional: Destroy widget programmatically
  // window.SkillblendA11y.destroy();
</script>`;

  const cdnManualInit = `<script src="https://cdn.jsdelivr.net/gh/yourusername/accessibility-widget@latest/dist-embed/widget.umd.js" data-auto-init="false"></script>
<script>
  window.SkillblendA11y.init({
    position: 'bottom-left',
    theme: 'dark'
  });
</script>`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Embeddable Accessibility Widget
        </h2>
        <p className="text-muted-foreground">
          Add accessibility features to any website with a single script tag
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <Code className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">Single Script Tag</h3>
          <p className="text-sm text-muted-foreground">
            Just one line of code to add all accessibility features
          </p>
        </Card>

        <Card className="p-4 text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
            <Eye className="h-5 w-5 text-green-600" />
          </div>
          <h3 className="font-semibold">Real-time Preview</h3>
          <p className="text-sm text-muted-foreground">
            See changes instantly as users adjust accessibility settings
          </p>
        </Card>

        <Card className="p-4 text-center space-y-2">
          <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto">
            <Badge className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-semibold">Zero Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Works out of the box with automatic positioning and theming
          </p>
        </Card>
      </div>

      {/* Integration Options */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            <Button
              variant={previewMode === 'script' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('script')}
            >
              Local Script
            </Button>
            <Button
              variant={previewMode === 'cdn' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode('cdn')}
            >
              CDN Version
            </Button>
          </div>

          {previewMode === 'script' ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Basic Integration</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{scriptTag}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(scriptTag)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Advanced Configuration</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{manualInit}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(manualInit)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
           ) : (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Basic CDN Integration</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{cdnScript}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(cdnScript)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Advanced CDN Configuration</h4>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{cdnManualInit}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(cdnManualInit)}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Build Instructions */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Building for CDN</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">1. Build the embeddable widget</h4>
            <div className="relative">
              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                <code>npm run build:embed</code>
              </pre>
              <Button
                size="sm"
                variant="outline"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard('npm run build:embed')}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              This creates <code>dist-embed/widget.umd.js</code> - a standalone bundle ready for CDN hosting.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">2. Host on your CDN</h4>
            <p className="text-sm text-muted-foreground">
              Upload the generated <code>widget.umd.js</code> file to your preferred CDN service (jsdelivr, unpkg, cloudflare, etc.) and update the script src URL in your integration code.
            </p>
          </div>
        </div>
      </Card>

      {/* Live Demo */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Live Demo</h3>
        <p className="text-muted-foreground mb-4">
          The accessibility widget on this page is a live demonstration. Try the settings in the floating button to see real-time changes!
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">✓ Font Size Control</Badge>
          <Badge variant="secondary">✓ High Contrast Mode</Badge>
          <Badge variant="secondary">✓ Language Switching</Badge>
          <Badge variant="secondary">✓ Screen Reader Support</Badge>
          <Badge variant="secondary">✓ Keyboard Navigation</Badge>
          <Badge variant="secondary">✓ Auto-initialization</Badge>
        </div>
      </Card>
    </div>
  );
};

export default EmbedDemo;