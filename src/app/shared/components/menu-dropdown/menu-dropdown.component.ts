import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';
import { NgTemplateOutlet, NgClass } from '@angular/common';

import { DropdownOptions } from 'flowbite';

import { IMenuDropdownItem } from '@core/interfaces';
import { createDropdown } from '@utils/flowbite-components';

import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet, SvgIconComponent, NgClass],
})
export class MenuDropdownComponent {
  item = input<IMenuDropdownItem>();

  private _cdr = inject(ChangeDetectorRef);

  dropdownItems(items: IMenuDropdownItem[]): IMenuDropdownItem[] {
    return items;
  }

  openDropdown(
    targetId: string,
    triggerId: string,
    options: DropdownOptions,
    item: IMenuDropdownItem
  ): void {
    const dropdownOptions = {
      ...options,
      onHide: () => {
        this._cdr.markForCheck();
      },
    };

    if (!item.dropdownElement) {
      item.dropdownElement = createDropdown(
        targetId,
        triggerId,
        dropdownOptions
      );
      item.dropdownElement.show();
    } else {
      item.dropdownElement.toggle();
    }
  }
}
