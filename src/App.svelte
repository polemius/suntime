<script>
  import { Router, Route } from 'svero';
  import Home from './Home.svelte';

  export let url = "";
</script>

<style>
:root {
    --light-gray: #fcfcfc;
    --dark-gray: #dddddd;
    --gray: #e2e2e2;
    --red: #ff6e6e;
    --black: #3d3d3d;
    --green: #67ef77;
}
.app {
  height: calc(100% - 30px);
  background: var(--light-gray);
  padding: 30px 30px 0 30px;
}
</style>

<div class="app">
    <Router>
        <Route path="/" component={Home} />
    </Router>
</div>
