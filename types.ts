import React from 'react';

export type Language = 'zh' | 'en';

export interface TechSpecItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export interface AppContent {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  previewCaption: string;
  techSpecs: {
    engine: string;
    format: string;
    precision: string;
    shader: string;
  };
  features: string[];
  footer: string;
}

export interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}