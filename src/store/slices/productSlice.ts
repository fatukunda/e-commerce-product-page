import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "src/models/Product";

export const product: IProduct = {
  id: 4365311672401,
  title: "nu3 Bio Acerola",
  body_html:
    "nu3 Bio Acerola-Pulver: 100 g ✓ Natürliche Vitamin C-Quelle ✓ Ohne Zusatzstoffe wie Maltodextrin ✓ Schonend gefriergetrocknet. Jetzt im nu3 Shop bestellen!",
  vendor: "nu3",
  product_type: "Nature",
  created_at: "2019-11-11T17:00:03+01:00",
  handle: "nu3-bio-acerola-pulver",
  url: "https://www.nu3.de/products/nu3-bio-acerola-pulver",
  updated_at: "2022-03-25T23:12:27+01:00",
  published_at: "2019-11-11T17:00:03+01:00",
  variants: [
    {
      id: 32511433474129,
      product_id: 4365311672401,
      title: "150 g",
      price: "18.99",
      sku: "nu3_21032",
      position: 1,
      compare_at_price: "21.99",
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "150 g",
      option2: null,
      option3: null,
      created_at: "2020-08-03T12:00:16+02:00",
      updated_at: "2022-03-25T23:12:27+01:00",
      taxable: true,
      barcode: "4260593957792",
      grams: 0,
      image_id: 15491638657105,
      weight: 0,
      weight_unit: "kg",
      tax_code: "",
      requires_shipping: true,
    },
    {
      id: 32788214087761,
      product_id: 4365311672401,
      title: "3 x 150 g",
      price: "51.99",
      sku: "nu3_21452",
      position: 2,
      compare_at_price: "59.99",
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "3 x 150 g",
      option2: null,
      option3: null,
      created_at: "2020-12-01T11:00:39+01:00",
      updated_at: "2022-03-25T21:57:45+01:00",
      taxable: true,
      barcode: "4260593957792",
      grams: 0,
      image_id: 16206942535761,
      weight: 0,
      weight_unit: "kg",
      tax_code: "",
      requires_shipping: true,
    },
  ],
  options: [
    {
      id: 5668092411985,
      product_id: 4365311672401,
      name: "amount",
      position: 1,
      values: ["150 g", "3 x 150 g"],
    },
  ],
  images: [
    {
      id: 15491638657105,
      product_id: 4365311672401,
      position: 1,
      created_at: "2020-08-03T12:00:20+02:00",
      updated_at: "2021-09-01T14:41:25+02:00",
      alt: null,
      width: 800,
      height: 800,
      src: "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085",
      variant_ids: [32511433474129],
    },
    {
      id: 16206942535761,
      product_id: 4365311672401,
      position: 2,
      created_at: "2020-12-01T11:00:43+01:00",
      updated_at: "2021-09-01T14:43:18+02:00",
      alt: null,
      width: 800,
      height: 800,
      src: "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/a_252F2_252F4_252Ff_252Fa24f85e82f207a80c119cb64b0fa99d3ac4def70_21452.jpg?v=1630500198",
      variant_ids: [32788214087761],
    },
  ],
  image: {
    id: 15491638657105,
    product_id: 4365311672401,
    position: 1,
    created_at: "2020-08-03T12:00:20+02:00",
    updated_at: "2021-09-01T14:41:25+02:00",
    alt: null,
    width: 800,
    height: 800,
    src: "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085",
    variant_ids: [32511433474129],
  },
};

const initialState = {
  product,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action:PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
