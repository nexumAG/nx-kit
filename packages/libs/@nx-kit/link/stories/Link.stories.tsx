import React from 'react';
import { Link } from '../src';

export default {
  title: '@nx-kit/link',
  component: Link,
};

export const Default = () => (
  <Link>
    <a href="http://www.google.de/" target="_blank" rel="noreferrer">
      Press me
    </a>
  </Link>
);

export const Primary = () => (
  <Link skin="primary">
    <a href="http://www.google.de/" target="_blank" rel="noreferrer">
      Press me
    </a>
  </Link>
);

export const Span = () => (
  <Link skin="primary" onPress={(e: any) => console.log(e)}>
    Press me
  </Link>
);

export const Styles = () => (
  <Link
    skin="primary"
    onPress={(e: any) => console.log(e)}
    styles={{ padding: '5px 30px', backgroundColor: '#f0f0f0', textTransform: 'uppercase' }}
  >
    Press me
  </Link>
);

export const DivAsChild = () => (
  <Link onPress={(e: any) => console.log(e)}>
    <div style={{ width: 100, height: 50, background: 'red' }} />
  </Link>
);

const Comp1 = () => <div style={{ width: 100, height: 50, background: 'blue' }} />;

export const NestedComponent = () => (
  <Link onPress={(e: any) => console.log(e)}>
    <div>
      <Comp1 />
    </div>
  </Link>
);
