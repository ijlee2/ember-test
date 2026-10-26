import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';
import { t } from 'ember-intl';
import { pageTitle } from 'ember-page-title';
import { UiPage } from 'my-v2-addon';
import ProductsProductDetails from 'my-v2-app-strict/components/products/product/details';
import type { Model } from 'my-v2-app-strict/routes/product-details';

import styles from './product-details.module.css';

interface ProductDetailsSignature {
  Args: {
    controller: unknown;
    model: Model;
  };
}

<template>
  {{pageTitle @model.name}}

  <UiPage @title={{t "routes.product-details.title"}}>
    <div class={{styles.products}}>
      <div class={{styles.product-details}}>
        <ProductsProductDetails @product={{@model}} />
      </div>

      <div class={{styles.actions}}>
        <LinkTo @route="products" data-test-link="Back">
          {{t "routes.product-details.back"}}
        </LinkTo>
      </div>
    </div>
  </UiPage>
</template> satisfies TOC<ProductDetailsSignature>;
