import en from '../lang/en-US';
import ru from '../lang/ru-RU';

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru }
  }
};
