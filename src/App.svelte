<script>
  import { Router, Route } from 'svero';
  import Home from './pages/Home.svelte';
  import Settings from './pages/Settings.svelte';

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
    font-family: 'Arial', serif;
}
</style>

<div class="app">
    <Router>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/settings" component={Settings} />
    </Router>
</div>
