export const CONFIG = {
	API: {},
	TOP_COUNT: 50,
	PATHS: {
		HOME: '/top'
	},
	STORAGE: {
		PREFIX: 'EO_FINANCE',
		COOKIES: {
			OPTIONS: {
				domain: '.investingbar.com',
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
	DEFAULT_LANGUAGE: 'en',
	LOCALE_SYNONYMS: {
		fil: ['tl']
	},
	SERVER_LIST: [
		'wss://test.eo.trade/ws/'
	],
	DEFAULT_API_VERSION: 12
};
