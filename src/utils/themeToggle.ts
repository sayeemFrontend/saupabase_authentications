export function themeToggle(theme: string) {
  let html = document.getElementsByTagName('html')[0];
  html.className = theme;
}
