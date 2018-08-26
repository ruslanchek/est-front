export const PATHS = {
	HOME: '/',
	AUTH_LOG_IN: '/auth/log-in',
	AUTH_SIGN_UP: '/auth/sign-up',
	AUTH_PASSWORD_RESET: '/auth/password-reset',
	PERSONAL: '/personal',
	PERSONAL_PLACE_ADVERT: '/personal/place-advert',
	OBJECT: '/object/:id',
	AGENT: '/agents/:id'
};

export const CONFIG = {
	API_BASE_URL: 'https://realthub.com/api',
	STATIC_PATH: 'https://static-realthub-com.ams3.digitaloceanspaces.com',
	CONTENT_PATH: 'https://content-realthub-com.ams3.digitaloceanspaces.com',
	GOOGLE_MAPS_KEY: 'AIzaSyBr9pzfBKKLSrG6BZk18fyYhPPmkEceSZU',
	STORAGE: {
		PREFIX: 'REALTHUB',
		COOKIES: {
			OPTIONS: {
				domain: '.realthub.com',
				path: '/',
				expires: new Date(new Date().setFullYear(new Date().getFullYear() + 10))
			}
		}
	},
	REF_PARAMS: [

	],
	DEFAULT_LOCALE: 'en',
	LOCALE_SYNONYMS: {
		fil: ['tl']
	},
	DEFAULT_API_VERSION: 12
};
