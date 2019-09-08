import differenceInMinutes from 'date-fns/differenceInMinutes'
import addMinutes from 'date-fns/addMinutes'

import { setHoursMinutesSeconds } from "./utils"

/**
 * @param sunrise Date
 * @param sunset Date
 * @returns {
 *    {
 *      goToBed: Date,
 *      offset: number,
 *      wakeUp: Date,
 *      dinner: Date,
 *      supper: Date
 *    }
 *  }
 */
function calcTimePoints(sunrise, sunset) {
	const diff = differenceInMinutes(sunset, sunrise)
	const realMidDay = addMinutes(sunrise, diff / 2)
	const midDay = setHoursMinutesSeconds(realMidDay, 12, 0, 0)
	const offset = differenceInMinutes(realMidDay, midDay)

	const wakeUp = setHoursMinutesSeconds(realMidDay, 6, offset, 0)
	const dinner = setHoursMinutesSeconds(realMidDay, 12, offset, 0)
	const supper = setHoursMinutesSeconds(realMidDay, 18, offset, 0)
	const goToBed = setHoursMinutesSeconds(realMidDay, 21, offset, 0)
	return {
		offset,
		wakeUp,
		dinner,
		supper,
		goToBed
	}
}

export default calcTimePoints
