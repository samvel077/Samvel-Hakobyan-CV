import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowbiteService {
  init(): void {
    this._lazyLoadFlowbiteComponents();
  }

  private _lazyLoadFlowbiteComponents(): void {
    Promise.all([
      import('flowbite/lib/esm/components/dropdown'),
      import('flowbite/lib/esm/components/modal'),
      import('flowbite/lib/esm/components/tooltip'),
    ]).then(([{ initDropdowns }, { initModals }, { initTooltips }]) => {
      initDropdowns();
      initModals();
      initTooltips();
    });
  }
}
