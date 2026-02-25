import { Injectable } from '@angular/core';

import { ETheme } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _currentTheme: ETheme;

  get currentTheme(): ETheme {
    return this._currentTheme;
  }

  set currentTheme(value: ETheme) {
    // First we need to change class for body, and then currentTheme
    this.setClassToBody(value);

    this._currentTheme = value;

    localStorage.setItem('theme-mode', value);
  }

  initTheme(): void {
    const savedThemeMode = localStorage.getItem('theme-mode');
    const deviceThemeMode = window.matchMedia('(prefers-color-scheme: dark)');

    if (
      savedThemeMode === ETheme.Dark ||
      (!savedThemeMode && deviceThemeMode.matches)
    ) {
      this.currentTheme = ETheme.Dark;
    } else {
      this.currentTheme = ETheme.Light;
    }
  }

  toggleThemeMode(): void {
    switch (this.currentTheme) {
      case ETheme.Dark: {
        this.currentTheme = ETheme.Light;
        break;
      }
      case ETheme.Light: {
        this.currentTheme = ETheme.Dark;
        break;
      }
    }
  }

  private setClassToBody(theme: ETheme): void {
    const bodyClassList = document.documentElement.classList;

    if (bodyClassList.contains(this.currentTheme)) {
      bodyClassList.replace(this.currentTheme, theme);
    } else {
      bodyClassList.add(theme);
    }
  }
}
