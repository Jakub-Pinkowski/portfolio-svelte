// src/lib/i18n/index.ts
import { init, getLocaleFromNavigator } from 'svelte-i18n';
import { addMessages } from 'svelte-i18n';

import en from '../locales/en.json';
import pl from '../locales/pl.json';

addMessages('en', en);
addMessages('pl', pl);

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});
