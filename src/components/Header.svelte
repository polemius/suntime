<script>
    import { _ } from 'svelte-i18n'
    import { navigateTo } from 'svero'
    export let showSettings = true;

    const toSetting = () => navigateTo('/settings')
    const toHome = () => navigateTo('/')
</script>

<style>
    .header {
        height: 40px;
    }
    .header__button {
        height: 40px;
        width: 40px;
        border: 0;
        cursor: pointer;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .header__button:active {
        background: var(--dark-gray);
    }
    .header__button-right {
        margin-left: auto;
    }
    .header__button__img--gear {
        width: 32px;
        height: 32px;
    }
    .header__button__img--back {
        width: 40px;
        height: 40px;
    }
</style>

<div class="header">
    {#if showSettings}
        <button class="header__button header__button-right" on:click={toSetting}>
            <img class="header__button__img--gear" alt="{$_('gear')}" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTI1IDM0Yy01IDAtOS00LTktOXM0LTkgOS05IDkgNCA5IDktNCA5LTkgOXptMC0xNmMtMy45IDAtNyAzLjEtNyA3czMuMSA3IDcgNyA3LTMuMSA3LTctMy4xLTctNy03eiIvPjxwYXRoIGQ9Ik0yNy43IDQ0aC01LjRsLTEuNS00LjZjLTEtLjMtMi0uNy0yLjktMS4ybC00LjQgMi4yLTMuOC0zLjggMi4yLTQuNGMtLjUtLjktLjktMS45LTEuMi0yLjlMNiAyNy43di01LjRsNC42LTEuNWMuMy0xIC43LTIgMS4yLTIuOWwtMi4yLTQuNCAzLjgtMy44IDQuNCAyLjJjLjktLjUgMS45LS45IDIuOS0xLjJMMjIuMyA2aDUuNGwxLjUgNC42YzEgLjMgMiAuNyAyLjkgMS4ybDQuNC0yLjIgMy44IDMuOC0yLjIgNC40Yy41LjkuOSAxLjkgMS4yIDIuOWw0LjYgMS41djUuNGwtNC42IDEuNWMtLjMgMS0uNyAyLTEuMiAyLjlsMi4yIDQuNC0zLjggMy44LTQuNC0yLjJjLS45LjUtMS45LjktMi45IDEuMkwyNy43IDQ0em0tNC0yaDIuNmwxLjQtNC4zLjUtLjFjMS4yLS4zIDIuMy0uOCAzLjQtMS40bC41LS4zIDQgMiAxLjgtMS44LTItNCAuMy0uNWMuNi0xIDEuMS0yLjIgMS40LTMuNGwuMS0uNSA0LjMtMS40di0yLjZsLTQuMy0xLjQtLjEtLjVjLS4zLTEuMi0uOC0yLjMtMS40LTMuNGwtLjMtLjUgMi00LTEuOC0xLjgtNCAyLS41LS4zYy0xLjEtLjYtMi4yLTEuMS0zLjQtMS40bC0uNS0uMUwyNi4zIDhoLTIuNmwtMS40IDQuMy0uNS4xYy0xLjIuMy0yLjMuOC0zLjQgMS40bC0uNS4zLTQtMi0xLjggMS44IDIgNC0uMy41Yy0uNiAxLTEuMSAyLjItMS40IDMuNGwtLjEuNUw4IDIzLjd2Mi42bDQuMyAxLjQuMS41Yy4zIDEuMi44IDIuMyAxLjQgMy40bC4zLjUtMiA0IDEuOCAxLjggNC0yIC41LjNjMS4xLjYgMi4yIDEuMSAzLjQgMS40bC41LjEgMS40IDQuM3oiLz48L3N2Zz4=" />
        </button>
    {:else}
        <button class="header__button" on:click={toHome}>
            <img class="header__button__img--back" alt="{$_('goBack')}" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PHBhdGggZD0iTTI3LjMgMzQuN0wxNy42IDI1bDkuNy05LjcgMS40IDEuNC04LjMgOC4zIDguMyA4LjN6Ii8+PC9zdmc+" />
        </button>
    {/if}
</div>
