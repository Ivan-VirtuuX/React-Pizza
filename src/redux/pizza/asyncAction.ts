import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchPizzaParams } from './slice';
import { baseUrl } from './../../baseUrl';
import { Pizza } from './types';

import axios from 'axios';
export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      baseUrl + `?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );

    return data;
  },
);
