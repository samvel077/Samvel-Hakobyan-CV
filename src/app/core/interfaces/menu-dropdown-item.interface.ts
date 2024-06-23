import { DropdownOptions } from 'flowbite';

export interface IMenuDropdownItem {
  name: string;
  dropdown?: IMenuDropdown;
}

export interface IMenuDropdown {
  id: string;
  items: IMenuDropdownItem[];
  options: DropdownOptions;
  classes?: string;
}
