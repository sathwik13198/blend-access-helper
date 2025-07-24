// Embeddable script for Skillblend Accessibility Widget
import React from 'react';
import { createRoot } from 'react-dom/client';
import AccessibilityWidget from '../components/AccessibilityWidget';
import '../index.css';

// Global initialization function
declare global {
  interface Window {
    SkillblendA11y: {
      init: (options?: { position?: string; theme?: string }) => void;
      destroy: () => void;
    };
  }
}

let widgetRoot: any = null;
let widgetContainer: HTMLElement | null = null;

const initWidget = (options: { position?: string; theme?: string } = {}) => {
  // Avoid multiple instances
  if (widgetContainer) {
    return;
  }

  // Create container
  widgetContainer = document.createElement('div');
  widgetContainer.id = 'skillblend-a11y-widget';
  widgetContainer.style.position = 'fixed';
  widgetContainer.style.zIndex = '999999';
  
  // Position options
  const position = options.position || 'bottom-right';
  switch (position) {
    case 'bottom-left':
      widgetContainer.style.bottom = '24px';
      widgetContainer.style.left = '24px';
      break;
    case 'top-right':
      widgetContainer.style.top = '24px';
      widgetContainer.style.right = '24px';
      break;
    case 'top-left':
      widgetContainer.style.top = '24px';
      widgetContainer.style.left = '24px';
      break;
    default: // bottom-right
      widgetContainer.style.bottom = '24px';
      widgetContainer.style.right = '24px';
  }

  // Append to body
  document.body.appendChild(widgetContainer);

  // Create React root and render
  widgetRoot = createRoot(widgetContainer);
  widgetRoot.render(React.createElement(AccessibilityWidget));
};

const destroyWidget = () => {
  if (widgetRoot) {
    widgetRoot.unmount();
    widgetRoot = null;
  }
  if (widgetContainer) {
    document.body.removeChild(widgetContainer);
    widgetContainer = null;
  }
};

// Expose global API
window.SkillblendA11y = {
  init: initWidget,
  destroy: destroyWidget
};

// Auto-initialize if script has data-auto-init
const currentScript = document.currentScript as HTMLScriptElement;
if (currentScript?.dataset.autoInit !== 'false') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initWidget());
  } else {
    initWidget();
  }
}

export { initWidget, destroyWidget };