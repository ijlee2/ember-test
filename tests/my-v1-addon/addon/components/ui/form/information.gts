import type { TOC } from '@ember/component/template-only';
import { concat } from '@ember/helper';
import { or } from 'ember-truth-helpers';

const styles = {
  container: 'my-v1-addon__ui__form__information__container',
  instructions: 'my-v1-addon__ui__form__information__instructions',
  title: 'my-v1-addon__ui__form__information__title',
} as const;

interface UiFormInformationSignature {
  Args: {
    formId: string;
    instructions?: string;
    title?: string;
  };
}

const UiFormInformation: TOC<UiFormInformationSignature> = <template>
  {{#if (or @title @instructions)}}
    <div class={{styles.container}}>
      {{#if @title}}
        <div
          class={{styles.title}}
          data-test-title
          id={{concat @formId "-title"}}
        >
          {{@title}}
        </div>
      {{/if}}

      {{#if @instructions}}
        <p
          class={{styles.instructions}}
          data-test-instructions
          id={{concat @formId "-instructions"}}
        >
          {{@instructions}}
        </p>
      {{/if}}
    </div>
  {{/if}}
</template>;

export default UiFormInformation;
