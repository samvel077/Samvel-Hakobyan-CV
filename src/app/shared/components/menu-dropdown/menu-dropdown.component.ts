import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
} from '@angular/core';

import { DropdownOptions } from 'flowbite';

import { createDropdown, IMenuDropdownItem } from '@app/core';

@Component({
  selector: 'menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrl: './menu-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDropdownComponent {
  @Input() item: IMenuDropdownItem;

  private _cdr = inject(ChangeDetectorRef);

  public openDropdown(
    targetId: string,
    triggerId: string,
    options: DropdownOptions,
    item: any
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
