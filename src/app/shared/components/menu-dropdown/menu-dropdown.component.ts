import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DropdownOptions } from "flowbite";

import { createDropdown, IMenuDropdownItem } from "@app/core";

@Component({
    selector: 'menu-dropdown',
    templateUrl: './menu-dropdown.component.html',
    styleUrl: './menu-dropdown.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDropdownComponent {
    @Input() item: IMenuDropdownItem;

    public openDropdown(targetId: string, triggerId: string, options: DropdownOptions, item: any): void {
        if (!item.dropdownElement) {
            item.dropdownElement = createDropdown(targetId, triggerId, options);
            item.dropdownElement.show();
        } else {
            item.dropdownElement.isVisible() ? item.dropdownElement.hide() : item.dropdownElement.show()
        }
    }
}
