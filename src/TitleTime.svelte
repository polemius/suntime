<style>
    .title-time {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-family: 'Arial', serif;
      font-size: 24px;
    }
    .title-time p {
      margin: 0 0 20px 0;
    }
</style>

<script>
    import { _ } from 'svelte-i18n'
    export let phrase, time;
</script>

<div class="title-time">
    <p>{$_(phrase)}</p>
    {#if time }
        <p>{$_.time(time)}</p>
    {/if}
</div>
