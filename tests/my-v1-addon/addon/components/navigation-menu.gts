import type { TOC } from '@ember/component/template-only';
import { LinkTo } from '@ember/routing';
import { local } from 'embroider-css-modules';

const styles = {
  link: 'my-v1-addon__navigation-menu__link',
  list: 'my-v1-addon__navigation-menu__list',
} as const;

type MenuItem = {
  label: string;
  route: string;
};

interface NavigationMenuSignature {
  Args: {
    menuItems: MenuItem[];
    name?: string;
  };
}

const NavigationMenu: TOC<NavigationMenuSignature> = <template>
  <nav aria-label={{@name}} data-test-nav={{@name}}>
    <ul class={{styles.list}}>
      {{#each @menuItems as |menuItem|}}
        <li>
          <LinkTo
            @route={{menuItem.route}}
            class={{local styles "link"}}
            data-test-link={{menuItem.label}}
          >
            {{menuItem.label}}
          </LinkTo>
        </li>
      {{/each}}
    </ul>
  </nav>
</template>;

export default NavigationMenu;
