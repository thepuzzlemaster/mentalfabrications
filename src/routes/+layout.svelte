<script lang="ts">
  import '../app.css';
  import Navbar from './navbar.svelte';
  let { children } = $props();
</script>

<Navbar />
<div class="p-4 text-emerald-50 md:p-8">
  {@render children()}
</div>
