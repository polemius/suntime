import setMinutes from 'date-fns/setMinutes'
import setSeconds from 'date-fns/setSeconds'
import setHours from 'date-fns/setHours'
import format from 'date-fns/format'

/**
 * @param date Date
 * @param hours number
 * @param minutes number
 * @param seconds number
 * @returns {Date}
 */
export const setHoursMinutesSeconds = (date, hours = 0, minutes = 0, seconds = 0) => setSeconds(setMinutes(setHours(date, hours), minutes), seconds)

/**
 * @param sunrise Date
 * @param offset number
 * @returns {string}
 */
export const formatOffset = (sunrise, offset) => {
	const offsetFormat = format(setHoursMinutesSeconds(sunrise, 0, Math.abs(offset), 0), 'HH:mm')
	return offset < 0 ? '-' + offsetFormat : offsetFormat
}
