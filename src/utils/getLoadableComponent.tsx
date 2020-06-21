import React from 'react';
import Loadable from 'react-loadable';

export default function (route: string) {
  return Loadable({
    loader: () => import(`../pages/${route}`),
    loading: () => <h1>Loading...</h1>,
    delay: 6000
  });
}