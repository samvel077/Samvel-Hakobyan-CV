import {
    Dropdown,
    DropdownOptions,
    Modal,
    ModalOptions,
    Tooltip,
    TooltipOptions
} from "flowbite";

export const createTooltip = (targetId: string, triggerId: string, options?: TooltipOptions): Tooltip => {
    const target = document.getElementById(targetId);
    const trigger = document.getElementById(triggerId);

    return new Tooltip(target, trigger, options)
}

export const createDropdown = (targetId: string, triggerId: string, options?: DropdownOptions): Dropdown => {
    const target = document.getElementById(targetId);
    const trigger = document.getElementById(triggerId);

    return new Dropdown(target, trigger, options);
}

export const createModal = (targetId: string, options?: ModalOptions): Modal => {
    const target = document.getElementById(targetId);

    return new Modal(target, options);
}
