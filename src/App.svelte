<script>
    import { _ } from 'svelte-i18n'
    import TitleTime from './TitleTime.svelte'
    import SunCalc from 'suncalc'

    let sunrise,
        sunset

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
    }

    getLocation();
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
       <TitleTime phrase={'sunrise'} time={sunrise} />
       <TitleTime phrase={'sunset'} time={sunset} />
       <TitleTime phrase={'offset'} time={new Date()} />
      </div>
      <div className="app__day_points">
              <TitleTime phrase={'wakeUp'} time={new Date()} />
              <TitleTime phrase={'dinner'} time={new Date()} />
              <TitleTime phrase={'supper'} time={new Date()} />
              <TitleTime phrase={'goToBed'} time={new Date()} />
            </div>
</div>

