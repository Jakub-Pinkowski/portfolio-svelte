import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.kRcPhDZg.js","_app/immutable/chunks/0VS8571f.js","_app/immutable/chunks/CM1phM2d.js","_app/immutable/chunks/BC3Z__8V.js","_app/immutable/chunks/m7G_Lky7.js","_app/immutable/chunks/nNSBKPnx.js"];
export const stylesheets = ["_app/immutable/assets/2.DOIDlZGP.css"];
export const fonts = [];
