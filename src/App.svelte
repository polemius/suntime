<script>
    import { _ } from 'svelte-i18n'
    import TitleTime from './TitleTime.svelte'
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

.app__times {
  margin-bottom: 30px;
}

.app__day_points p {
  font-size: 38px;
  font-family: 'Arial', serif;
}
</style>

<div class="app">
      <div class="app__times">
       <TitleTime phrase={'sunrise'} time={new Date()} />
       <TitleTime phrase={'sunset'} time={new Date()} />
       <TitleTime phrase={'offset'} time={new Date()} />
      </div>
      <div className="app__day_points">
              <TitleTime phrase={'wakeUp'} time={new Date()} />
              <TitleTime phrase={'dinner'} time={new Date()} />
              <TitleTime phrase={'supper'} time={new Date()} />
              <TitleTime phrase={'goToBed'} time={new Date()} />
            </div>
</div>

