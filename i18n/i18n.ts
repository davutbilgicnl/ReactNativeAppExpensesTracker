//npx expo install expo-localization
import * as Localization from 'expo-localization';

//npm install i18n-js@latest
import { I18n } from 'i18n-js';

//language files
import en from './en';
import nl from './nl';
import tr from './tr';

// Define available translations
const translations = { en, nl, tr };

// Define the type for the translation keys
type TranslationKeys = keyof typeof translations;

// Create a new I18n instance with the translations
const i18n = new I18n(translations);

// Set the default locale to 'en'
i18n.defaultLocale = 'en';

// Get the first available locale or default to 'en'
const locales = Localization.getLocales();
const locale = (locales[0]?.languageCode as TranslationKeys) || 'en';

// Set the locale if it exists in the translations, otherwise default to 'en'
i18n.locale = translations[locale] ? locale : 'en';
// const locale = Localization.getLocales()[0].languageCode?.toString() || 'en';

// Export the configured i18n instance
export default i18n;
