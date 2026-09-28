import type NavigationMenuComponent from './components/navigation-menu';
import type UiFormComponent from './components/ui/form';
import type UiFormCheckboxComponent from './components/ui/form/checkbox';
import type UiFormFieldComponent from './components/ui/form/field';
import type UiFormInformationComponent from './components/ui/form/information';
import type UiFormInputComponent from './components/ui/form/input';
import type UiFormNumberComponent from './components/ui/form/number';
import type UiFormSelectComponent from './components/ui/form/select';
import type UiFormTextareaComponent from './components/ui/form/textarea';
import type UiPageComponent from './components/ui/page';

export default interface MyAddonRegistry {
  'navigation-menu': typeof NavigationMenuComponent;
  NavigationMenu: typeof NavigationMenuComponent;
  'Ui::Form': typeof UiFormComponent;
  'Ui::Form::Checkbox': typeof UiFormCheckboxComponent;
  'Ui::Form::Field': typeof UiFormFieldComponent;
  'Ui::Form::Information': typeof UiFormInformationComponent;
  'Ui::Form::Input': typeof UiFormInputComponent;
  'Ui::Form::Number': typeof UiFormNumberComponent;
  'Ui::Form::Select': typeof UiFormSelectComponent;
  'Ui::Form::Textarea': typeof UiFormTextareaComponent;
  'Ui::Page': typeof UiPageComponent;
  'ui/form': typeof UiFormComponent;
  'ui/form/checkbox': typeof UiFormCheckboxComponent;
  'ui/form/field': typeof UiFormFieldComponent;
  'ui/form/information': typeof UiFormInformationComponent;
  'ui/form/input': typeof UiFormInputComponent;
  'ui/form/number': typeof UiFormNumberComponent;
  'ui/form/select': typeof UiFormSelectComponent;
  'ui/form/textarea': typeof UiFormTextareaComponent;
  'ui/page': typeof UiPageComponent;
}
