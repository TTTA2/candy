<script lang="ts">
	import { Button, StyleFromScheme } from "m3-svelte";
    import Main from "./lib/Main.svelte";
</script>

<StyleFromScheme
  lightScheme={{"primary":4283652754,"onPrimary":4294967295,"primaryContainer":4292862207,"onPrimaryContainer":4282139257,"inversePrimary":4290560767,"secondary":4284177778,"onSecondary":4294967295,"secondaryContainer":4292927737,"onSecondaryContainer":4282664281,"tertiary":4286010220,"onTertiary":4294967295,"tertiaryContainer":4294957039,"onTertiaryContainer":4284365908,"error":4290386458,"onError":4294967295,"errorContainer":4294957782,"onErrorContainer":4287823882,"background":4294703359,"onBackground":4279966497,"surface":4294703359,"onSurface":4279966497,"surfaceVariant":4293124588,"onSurfaceVariant":4282795599,"inverseSurface":4281348150,"inverseOnSurface":4294111223,"outline":4286019200,"outlineVariant":4291282384,"shadow":4278190080,"scrim":4278190080,"surfaceDim":4292598240,"surfaceBright":4294703359,"surfaceContainerLowest":4294967295,"surfaceContainerLow":4294308602,"surfaceContainer":4293914100,"surfaceContainerHigh":4293584879,"surfaceContainerHighest":4293190121,"surfaceTint":4283652754}}
  darkScheme={{"primary":4290560767,"onPrimary":4280626017,"primaryContainer":4282139257,"onPrimaryContainer":4292862207,"inversePrimary":4283652754,"secondary":4291085789,"onSecondary":4281151298,"secondaryContainer":4282664281,"onSecondaryContainer":4292927737,"tertiary":4293376470,"onTertiary":4282721852,"tertiaryContainer":4284365908,"onTertiaryContainer":4294957039,"error":4294948011,"onError":4285071365,"errorContainer":4287823882,"onErrorContainer":4294957782,"background":4279440152,"onBackground":4293190121,"surface":4279440152,"onSurface":4293190121,"surfaceVariant":4282795599,"onSurfaceVariant":4291282384,"inverseSurface":4293190121,"inverseOnSurface":4281348150,"outline":4287729818,"outlineVariant":4282795599,"shadow":4278190080,"scrim":4278190080,"surfaceDim":4279440152,"surfaceBright":4281940287,"surfaceContainerLowest":4279045651,"surfaceContainerLow":4279966497,"surfaceContainer":4280229669,"surfaceContainerHigh":4280887599,"surfaceContainerHighest":4281611322,"surfaceTint":4290560767}} />

<main>
	<Main></Main>
</main>

<style>

	main {
		width: 100vw;
		height: 100vh;
	}

</style>