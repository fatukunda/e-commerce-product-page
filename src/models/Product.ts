export interface IVariant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  position: number;
  compare_at_price: string;
  fulfillment_service: string;
  inventory_management: string;
  option1: string;
  option2?: string;
  option3?: string;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  grams: number;
  image_id: number;
  weight: number;
  weight_unit: string;
  tax_code?: string;
  requires_shipping: boolean;
}

export interface IOption {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
}

export interface IImage {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: string|null;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

export interface IProduct {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  url: string;
  updated_at: string;
  published_at: string;
  variants: Array<
    {
      id: number;
      product_id: number;
      title: string;
      price: string;
      sku: string;
      position: number;
      compare_at_price: string;
      fulfillment_service: string;
      inventory_management: string;
      option1: string;
      option2?: string|null;
      option3?: string|null;
      created_at: string;
      updated_at: string;
      taxable: boolean;
      barcode: string;
      grams: number;
      image_id: number;
      weight: number;
      weight_unit: string;
      tax_code?: string;
      requires_shipping: boolean;
    }>
  options: [
    {
      id: number;
      product_id: number;
      name: string;
      position: number;
      values: string[];
    }
  ];
  images: Array<
    {
      id: number;
      product_id: number;
      position: number;
      created_at: string;
      updated_at: string;
      alt?: string|null;
      width: number;
      height: number;
      src: string;
      variant_ids: number[];
    }>;
  image: {
    id: number;
    product_id: number;
    position: number;
    created_at: string;
    updated_at: string;
    alt?: string|null;
    width: number;
    height: number;
    src: string;
    variant_ids: number[];
  };
}
