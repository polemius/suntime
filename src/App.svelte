<script>
    import { _ } from 'svelte-i18n'
    import TitleTime from './TitleTime.svelte'
    import SunCalc from 'suncalc'
    import { formatOffset } from "./utils"
    import calcTimePoints from "./calcTimePoints"

    let sunrise,
        sunset,
        offset,
        wakeUp,
        dinner,
        supper,
        goToBed;

    function getLocation() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geo Location not supported by browser");
      }
    }

    function showPosition(position) {
      const { longitude, latitude } = position.coords
      const times = SunCalc.getTimes(new Date(), latitude, longitude)
      sunrise = times.sunrise
      sunset = times.sunset

      const timePoints = calcTimePoints(sunrise, sunset)
      wakeUp = timePoints.wakeUp
      dinner = timePoints.dinner
      supper = timePoints.supper
      goToBed = timePoints.goToBed
      offset = formatOffset(sunrise, timePoints.offset)
    }
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
.app__buttons {
  display: flex;
  justify-content: center;
}
</style>

<div class="app">
    <div class="app__times">
        <TitleTime phrase={'sunrise'} time={sunrise} />
        <TitleTime phrase={'sunset'} time={sunset} />
        <TitleTime phrase={'offset'} time={offset} withFormatting={false} />
    </div>
    <div class="app__day_points">
        <TitleTime phrase={'wakeUp'} time={wakeUp} />
        <TitleTime phrase={'dinner'} time={dinner} />
        <TitleTime phrase={'supper'} time={supper} />
        <TitleTime phrase={'goToBed'} time={goToBed} />
    </div>
    <div class="app__buttons">
        <button on:click={getLocation}>Calculate</button>
    </div>
</div>

