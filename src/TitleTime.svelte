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
    export let phrase, time, withFormatting = true;
</script>

<div class="title-time">
    <p>{$_(phrase)}</p>
    {#if time}
        {#if withFormatting }
            <p>{$_.time(time)}</p>
        {:else}
            <p>{time}</p>
        {/if}
    {/if}

</div>
