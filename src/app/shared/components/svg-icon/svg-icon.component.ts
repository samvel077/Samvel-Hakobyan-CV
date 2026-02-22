import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'svg-icon',
  template: `
    <!--    You can also get the width and height directly from input and use like this-->
    <!--    <svg [attr.width.px]="width" attr.height="{{height}}px">-->

    <svg [ngClass]="classes()">
      <use attr.xlink:href="assets/svg/sprite.svg#icon-{{ iconName() }}"></use>
    </svg>

    <!--    <svg>-->
    <!--      <use [attr.xlink:href]="'assets/svg/sprite.svg.svg#icon-' + iconName"></use>-->
    <!--      -->
    <!--      or-->

    <!--      <use attr.href="assets/svg/sprite.svg#icon-{{iconName}}"></use>-->
    <!--    </svg>-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class SvgIconComponent {
  iconName = input.required<string>();
  classes = input<string>();
}
