import { Dropdown, DropdownOptions } from 'flowbite';

export interface IMenuDropdownItem {
  name: string;
  dropdown?: IMenuDropdown;
  dropdownElement?: Dropdown;
}

export interface IMenuDropdown {
  id: string;
  items: IMenuDropdownItem[];
  options: DropdownOptions;
  classes?: string;
}
