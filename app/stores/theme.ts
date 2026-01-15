import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const storageKey = 'nuxt-color-mode';
  const { userData } = useUserStore();
  const theme = useLocalStorage<Theme>(storageKey, userData.theme);
  const $api = useRequestFetch();

  const toggleTheme = (ev?: MouseEvent) => {
    if (!import.meta.client) return;

    const oldTheme = theme.value;
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    const newTheme = theme.value;

    const switchButton = ev?.currentTarget as HTMLButtonElement | null;
    const rect = switchButton?.getBoundingClientRect();

    const x = rect ? rect.left + rect.width / 2 : window.innerWidth;
    const y = rect ? rect.top + rect.height / 2 : 0;

    // Go and take a look about the ~/assets/view-transition.css file
    document.documentElement.style.setProperty('--theme-toggle-x', `${x}px`);
    document.documentElement.style.setProperty('--theme-toggle-y', `${y}px`);

    if (!document.startViewTransition) {
      document.documentElement.classList.replace(oldTheme, newTheme);
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.classList.replace(oldTheme, newTheme);
    });

    $api('/api/preferences/theme', {
      method: 'POST',
      body: {
        theme: newTheme,
      },
    });
  };

  return {
    theme,
    toggleTheme,
  };
});
