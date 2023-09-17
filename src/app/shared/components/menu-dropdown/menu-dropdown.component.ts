import { Component, Input } from '@angular/core';
import { createDropdown, IMenuDropdownItem } from "@app/core";
import { DropdownOptions } from "flowbite";

@Component({
    selector: 'menu-dropdown',
    templateUrl: './menu-dropdown.component.html',
    styleUrls: ['./menu-dropdown.component.scss']
})
export class MenuDropdownComponent {
    @Input() item: IMenuDropdownItem;

    public openDropdown(targetId: string, triggerId: string, options: DropdownOptions, item: any): void {
        if (!item.dropdownElement) {
            item.dropdownElement = createDropdown(targetId, triggerId, options);
            item.dropdownElement.show();
        } else {
            item.dropdownElement.hide();
            delete item.dropdownElement;
        }
    }
}
