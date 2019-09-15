<script>
    import Header from '../components/Header.svelte'
    import { Link } from 'svero'
    import { locale, _ } from 'svelte-i18n'

    const langOptions = [
    	{id: 0, lang: 'ru', text: 'Русский'},
    	{id: 1, lang: 'en', text: 'English'},
    ]

    let selected = langOptions[1].lang;
    if (localStorage && localStorage.getItem('lang')) {
    	const lang = localStorage.getItem('lang')
    	const findOption = langOptions.find((option) => option.lang === lang)
    	selected = findOption ? findOption.lang : langOptions[1].lang
    }

    function saveLangOption() {
        locale.set(selected)
    }

</script>

<style>
    .settings {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        font-family: 'Arial', serif;
    }
    .settings__buttons {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .settings__title {
        font-size: 38px;
        font-family: 'Arial', serif;
    }
</style>

<Header showSettings={false} />

<div class="settings">
<p class="settings__title">
{$_('language')}:
</p>
<select bind:value={selected}>
    {#each langOptions as option}
        <option value={option.lang}>
            {option.text}
        </option>

    {/each}
</select>
<div class="settings__buttons">
    <button on:click={saveLangOption}>{$_('save')}</button>
</div>
</div>
