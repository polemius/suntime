import { locale, dictionary, getClientLocale } from 'svelte-i18n'

dictionary.set({
	ru: {
		goBack: 'Назад',
		gear: 'Настройки',
		settings: 'Настройки',
		language: 'Язык',
		save: 'Сохранить',
		sunrise: 'Восход',
		sunset: 'Закат',
		offset: 'Смещение',
		wakeUp: 'Подъём',
		dinner: 'Обед',
		supper: 'Ужин',
		goToBed: 'Отбой',
		calculate: 'Расчитать',
	},
	en: {
		goBack: 'Go back',
		gear: 'Settings',
		settings: 'Settings',
		language: 'Language',
		save: 'Save',
		sunrise: 'Sunrise',
		sunset: 'Sunset',
		offset: 'Offset',
		wakeUp: 'Wake Up',
		dinner: 'Dinner',
		supper: 'Supper',
		goToBed: 'Go to bed',
		calculate: 'Calculate',
	},
})

let defaultLang = 'en'

if (localStorage && localStorage.getItem('lang')) {
	defaultLang = localStorage.getItem('lang')
}

locale.set(
	getClientLocale({
		navigator: true,
		hash: 'lang',
		fallback: defaultLang,
	}),
)

locale.subscribe(l => {
	if (localStorage) {
		localStorage.setItem('lang', l)
	}
})
