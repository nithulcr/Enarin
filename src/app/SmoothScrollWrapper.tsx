'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  return (

      <ReactLenis root>{children}</ReactLenis>

  );
}

export default SmoothScrollWrapper;