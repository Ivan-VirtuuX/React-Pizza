import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import './scss/app.scss';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));

const FullPizza = lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));

const NotFoundBlock = lazy(() =>
  import(/* webpackChunkName: "NotFoundBlock" */ './components/NotFoundBlock/NotFoundBlock').then(
    ({ NotFoundBlock }) => ({
      default: NotFoundBlock,
    }),
  ),
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div className="loading">Загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div className="loading">Загрузка пиццы...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="loading">Загрузка...</div>}>
              <NotFoundBlock />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
