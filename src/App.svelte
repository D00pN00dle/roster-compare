

<script>
  import Counter from './lib/Counter.svelte'
  //import { Styles } from '@sveltestrap/sveltestrap';
  import { Container, Button } from '@sveltestrap/sveltestrap';
  import FileInputs from './lib/FileInputs.svelte';
  import List from './lib/List.svelte';
  import { sharedState } from './js/SharedState.svelte.js';
</script>

<!-- Bootswatch theme via CDN -->
<svelte:head>
  <!-- First, load Bootstrap CSS -->
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  >
  <!-- Bootstrap Icons -->
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  >
  <!-- Then, load Bootswatch theme (overrides Bootstrap default) -->
  <link 
    rel="stylesheet" 
    href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/darkly/bootstrap.min.css"
  >
</svelte:head>

<Container class="vh-100 d-grid align-items-center p-4" style="max-width: 650px;">
  <Container class="card p-3">
    <FileInputs />
  <div class="card">
    <List items={sharedState.items} />
  </div>
  </Container>
  <div class="py-2"></div>
</Container>

