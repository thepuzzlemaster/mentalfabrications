<script lang="ts">
  import '../app.css';
  import Navbar from './navbar.svelte';
  let { children } = $props();
</script>

<Navbar />
<div class="p-8 text-emerald-50">
  {@render children()}
</div>
