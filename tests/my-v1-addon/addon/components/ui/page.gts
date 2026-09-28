import type { TOC } from '@ember/component/template-only';

const styles = {
  container: 'my-v1-addon__ui__page__container',
  content: 'my-v1-addon__ui__page__content',
  title: 'my-v1-addon__ui__page__title',
} as const;

interface UiPageSignature {
  Args: {
    title: string;
  };
  Blocks: {
    default: [];
  };
}

const UiPage: TOC<UiPageSignature> = <template>
  <div class={{styles.container}}>
    <h1 class={{styles.title}}>
      {{@title}}
    </h1>

    <div class={{styles.content}} id="main-content" tabindex="-1">
      {{yield}}
    </div>
  </div>
</template>;

export default UiPage;
