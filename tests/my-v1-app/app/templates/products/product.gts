import type { TOC } from '@ember/component/template-only';
import { pageTitle } from 'ember-page-title';
import ProductsProductDetails from 'my-v1-app/components/products/product/details';
import type { Model } from 'my-v1-app/routes/products/product';

import styles from './product.module.css';

interface ProductsProductSignature {
  Args: {
    controller: unknown;
    model: Model;
  };
}

<template>
  {{pageTitle @model.name}}

  <div class={{styles.product-details}}>
    <ProductsProductDetails @product={{@model}} />
  </div>
</template> satisfies TOC<ProductsProductSignature>;
