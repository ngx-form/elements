// external
import { Injectable } from '@angular/core';

// internal
import { component } from '@ngx-core/common';
import { element } from '@ngx-form/type';
import { FormElementConfigInterface } from '@ngx-form/interface';

/**
 * forRoot config with possible elements to create.
 * @export
 * @class FormElementConfig
 * @implements {FormElementConfigInterface}
 */
@Injectable()
export class FormElementConfig implements FormElementConfigInterface {
  elements: {
    [index: number]: {
      name: element;
      component: component;
    }
  }
  errorMessages?: {};
};

/**
 * Service to hold the config with configured elements component
 * @export
 * @class FormElementServiceFormElementConfig
 */
@Injectable()
export class FormElementService {

  /**
   * Creates an instance of FormElementService.
   * @param {FormElementConfig} config
   * @memberof FormElementService
   */
  constructor(private formElementConfig: FormElementConfig) {}

  /**
   * Find element by `name` in config `elements` and return component assigned to it.
   * @param {e} element name of html element for example 'input'
   * @returns {null | any}
   */
  public find(e: element): null | any {
    let t: component | null = null;
    if (e) {
      if (this.formElementConfig) {
        if (this.formElementConfig instanceof Array) {
          this.formElementConfig.forEach((provider) => {
            if (provider !== undefined) {
              provider.elements.forEach((value: any) => {
                if (value['name'] === e) {
                  t = value.component;
                }
              });
            }
          });
        }
      }
    }
    return t;
  }
}
