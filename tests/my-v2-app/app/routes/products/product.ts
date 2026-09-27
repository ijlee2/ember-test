import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';
import type { ModelFrom } from 'my-v2-app/utils/routes';
import type { Product } from 'my-v2-app/utils/routes/products';

import type ProductsRoute from '../products';

export type Model = ModelFrom<ProductsProductRoute> & {
  id: string;
};

export default class ProductsProductRoute extends Route {
  @service declare experiments: Services['experiments'];
  @service declare router: Services['router'];

  get showDetailsOnSamePage(): boolean {
    return this.experiments.getVariant('nest-product-details') === 'v1';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeModel(transition: any): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const { id } = transition.to.params;

    if (!this.showDetailsOnSamePage) {
      this.router.replaceWith('product-details', id);
      return;
    }
  }

  model(params: { id: string }): Product {
    const { id } = params;
    const products = this.modelFor('products') as ModelFrom<ProductsRoute>;

    const product = products.find((product) => product.id === id);

    if (!product) {
      throw new Error(`Could not find the product with ID ${id}.`);
    }

    return product;
  }

  @action error(/* error, transition */): void {
    this.router.replaceWith('products');
  }
}
