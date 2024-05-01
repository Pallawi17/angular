import { Component } from '@angular/core';
import config from '../../../assets/theme.config';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css',
})
export class ThemeComponent {
  isDarkMode: boolean = true;
  themeName: string = 'light';
  themeTitle: string  = 'Switch to light theme';
  root: HTMLElement | undefined;
  ngOnInit() {
    this.root = document.documentElement;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeName = this.isDarkMode ? 'dark' : 'light';
    this.themeTitle = `Switch to ${this.isDarkMode? 'light': 'dark'} theme`;
    this.switchToTheme(this.themeName);
  }

  switchToTheme(name: string) {
    const themeClass = config[name];
    const _themeClass = Object.keys(themeClass);

    _themeClass.forEach((key) => {
      const val = themeClass[key as keyof typeof themeClass];
      document.documentElement.style.setProperty(`--${key}`, val);
    });
  }
}
