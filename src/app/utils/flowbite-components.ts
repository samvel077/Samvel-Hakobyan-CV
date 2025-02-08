import Dropdown from 'flowbite/lib/esm/components/dropdown';
import Modal from 'flowbite/lib/esm/components/modal';
import Tooltip from 'flowbite/lib/esm/components/tooltip';

import { DropdownOptions } from 'flowbite/lib/esm/components/dropdown/types';
import { ModalOptions } from 'flowbite/lib/esm/components/modal/types';
import { TooltipOptions } from 'flowbite/lib/esm/components/tooltip/types';

export const createTooltip = (
  targetId: string,
  triggerId: string,
  options?: TooltipOptions
): Tooltip => {
  const target = document.getElementById(targetId);
  const trigger = document.getElementById(triggerId);

  return new Tooltip(target, trigger, options);
};

export const createDropdown = (
  targetId: string,
  triggerId: string,
  options?: DropdownOptions
): Dropdown => {
  const target = document.getElementById(targetId);
  const trigger = document.getElementById(triggerId);

  return new Dropdown(target, trigger, options);
};

export const createModal = (
  targetId: string,
  options?: ModalOptions
): Modal => {
  const target = document.getElementById(targetId);

  return new Modal(target, options);
};
