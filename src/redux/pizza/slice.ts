import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza, PizzaSliceState, Status } from './types';
import { fetchPizzas } from './asyncAction';

// Все ключи объекта string, и все значения объекта string
// type FetchPizzasArgs = Record<string, string>;

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
  //   extraReducers: {
  //     [fetchPizzas.pending]: (state) => {
  //       state.status = 'loading';
  //       state.items = [];
  //     },
  //     [fetchPizzas.fulfilled]: (state, action) => {
  //       state.status = 'success';
  //       state.items = action.payload;
  //     },
  //     [fetchPizzas.rejected]: (state) => {
  //       state.status = 'error';
  //       state.items = [];
  //     },
  //   },
});
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
