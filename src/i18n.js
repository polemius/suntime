import { locale, dictionary, getClientLocale } from 'svelte-i18n'

dictionary.set({
	ru: {
		goBack: 'Назад',
		gear: 'Настройки',
		sunrise: 'Восход',
		sunset: 'Закат',
		offset: 'Смещение',
		wakeUp: 'Подъём',
		dinner: 'Обед',
		supper: 'Ужин',
		goToBed: 'Отбой',
	},
	en: {
		goBack: 'Go back',
		gear: 'Settings',
		sunrise: 'Sunrise',
		sunset: 'Sunset',
		offset: 'Offset',
		wakeUp: 'Wake Up',
		dinner: 'Dinner',
		supper: 'Supper',
		goToBed: 'Go to bed',
	},
})

locale.set(
	getClientLocale({
		navigator: true,
		hash: 'lang',
		fallback: 'ru',
	}),
)

locale.subscribe(l => {
	console.log('locale change', l)
})
