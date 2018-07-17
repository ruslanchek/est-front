export const PATHS = {
	HOME: '/',
	AUTH_LOGIN: '/auth/login',
	AUTH_SIGN_UP: '/auth/sign-up',
	OBJECT: '/object/:id',
	AGENT: '/agents/:id'
};

export const CONFIG = {
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
		'id',
		'refid',
		'click_id',
		'source_id',
		'banner_id',
		'keywords',
		'land',
		'campaign_id',
		'adset_id',
		'tr',
		'tr2',
		'uniq',
		'page',
		'bonusCode',
		'referer',
		'ctime'
	],
	DEFAULT_LOCALE: 'en',
	LOCALE_SYNONYMS: {
		fil: ['tl']
	},
	SERVER_LIST: [
		'wss://test.eo.trade/ws/'
	],
	DEFAULT_API_VERSION: 12
};
