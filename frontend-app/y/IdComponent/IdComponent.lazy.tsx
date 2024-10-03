import React, { lazy, Suspense } from 'react';

const LazyIdComponent = lazy(() => import('./IdComponent'));

const IdComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyIdComponent {...props} />
  </Suspense>
);

export default IdComponent;
