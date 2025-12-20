export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".well-known/appspecific/com.chrome.devtools.json","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.ico","favicon.png","favicons/.DS_Store","favicons/android-icon-144x144.png","favicons/android-icon-192x192.png","favicons/android-icon-36x36.png","favicons/android-icon-48x48.png","favicons/android-icon-72x72.png","favicons/android-icon-96x96.png","favicons/apple-icon-114x114.png","favicons/apple-icon-120x120.png","favicons/apple-icon-144x144.png","favicons/apple-icon-152x152.png","favicons/apple-icon-180x180.png","favicons/apple-icon-57x57.png","favicons/apple-icon-60x60.png","favicons/apple-icon-72x72.png","favicons/apple-icon-76x76.png","favicons/apple-icon-precomposed.png","favicons/apple-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon-96x96.png","favicons/favicon.png","favicons/manifest.json","favicons/ms-icon-144x144.png","favicons/ms-icon-150x150.png","favicons/ms-icon-310x310.png","favicons/ms-icon-70x70.png","manifest.json","robots.txt","sitemap.xml"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".xml":"text/xml",".txt":"text/plain",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.DIcJQvsK.js",app:"_app/immutable/entry/app.BeMNkuAm.js",imports:["_app/immutable/entry/start.DIcJQvsK.js","_app/immutable/chunks/C0fCxOjs.js","_app/immutable/chunks/CM1phM2d.js","_app/immutable/entry/app.BeMNkuAm.js","_app/immutable/chunks/CM1phM2d.js","_app/immutable/chunks/0VS8571f.js","_app/immutable/chunks/nNSBKPnx.js","_app/immutable/chunks/Bt2rIrB6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/e-commerce.2573GyfQ.webp":196446,"_app/immutable/assets/jules-art.CzaVcZRj.webp":112316,"_app/immutable/assets/crypto_bot.C4inu0rX.webp":86656,"_app/immutable/assets/trading-bot.Dxz2s9WB.webp":97490,"_app/immutable/assets/blogging-platform.C57kYo1i.webp":201304,"_app/immutable/assets/links-page.B4HPy1Up.webp":38936,"_app/immutable/assets/mobile.hswaGUF5.webp":78262,"_app/immutable/assets/internet.LE-58mjb.webp":73476,"_app/immutable/assets/desktop.D8qjyNYd.webp":109640,"_app/immutable/assets/meals.wCRtyMrN.webp":248660,"_app/immutable/assets/weather.C7BsrMe0.webp":120474,"_app/immutable/assets/travel-blog.B6j-orxO.webp":138592,"_app/immutable/assets/todo.BYMFbcyW.webp":51640,"_app/immutable/assets/coach.CZgHvc99.webp":116270,"_app/immutable/assets/investment-calculator.BtNYl3DD.webp":40950,"_app/immutable/assets/next.BnoWImtA.png":14501,"_app/immutable/assets/svelte.vLewIHgl.png":13132,"_app/immutable/assets/sveltekit.DVmPMah0.png":28089,"_app/immutable/assets/blazor.C2lhp6_D.png":15421,"_app/immutable/assets/react-native.BzA1WWVc.png":20976,"_app/immutable/assets/csharp.CDMLWrE8.png":4557,"_app/immutable/assets/github.nmw778zG.png":14902}
	}
}
})();
