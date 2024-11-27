<script lang="ts">
  import '../app.css';
  import NavLink from './navLink.svelte';
  let { children } = $props();
</script>

<nav class="fixed right-0 top-0 z-30 mt-2">
  <ul class="flex justify-end px-4">
    <NavLink href="#home">Home</NavLink>
    <NavLink href="#about-me">About me</NavLink>
    <NavLink href="#skills">Skills</NavLink>
    <NavLink href="#projects">Projects</NavLink>
    <NavLink href="#contact">Contact</NavLink>
    <NavLink href="#art">Art</NavLink>
  </ul>
</nav>
<div class="p-8 text-emerald-50">
  {@render children()}
</div>
