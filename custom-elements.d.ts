import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gmp-map": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "data-center"?: string;
        "data-zoom"?: string;
        "data-map-id"?: string;
        class?: string;
      };
      "gmp-advanced-marker": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "data-position"?: string;
        "data-title"?: string;
      };
    }
  }
}