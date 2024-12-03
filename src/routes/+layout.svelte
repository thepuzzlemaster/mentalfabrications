<script lang="ts">
  import { setAnimationContext } from '$lib/shared/animationContext';
  import '../app.css';
  import Navbar from './navbar.svelte';

  let { children } = $props();

  let allowAnimation$ = $state({ allowAnimation: true });

  setAnimationContext(allowAnimation$);
</script>

<Navbar />
<div class="p-4 text-emerald-50 md:p-8">
  {@render children()}
</div>
