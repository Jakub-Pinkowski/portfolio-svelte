<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<div id="banner" class="flex h-screen items-center bg-[#1a1a1d] tracking-wide">
	<div class="ml-8 md:ml-24">
		<h1 class="p-4 text-6xl text-main">{$t('banner.title')}</h1>
		<h2 class="p-4 text-3xl text-gray">{$t('banner.subtitle')}</h2>
	</div>
	<span class="absolute bottom-2 left-2 uppercase text-light"> Scroll down </span>
</div>
