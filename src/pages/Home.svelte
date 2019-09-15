<script>
    import { _ } from 'svelte-i18n'
    import TitleTime from '../components/TitleTime.svelte'
    import Header from '../components/Header.svelte'
    import SunCalc from 'suncalc'
    import { formatOffset } from "../utils"
    import calcTimePoints from "../calcTimePoints"

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
.app__times {
    margin-bottom: 30px;
}
.app__day_points p {
    font-size: 38px;
}
.app__buttons {
    display: flex;
    justify-content: center;
    font-size: 20px;
}
</style>

<Header />
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
    <button on:click={getLocation}>{$_('calculate')}</button>
</div>
