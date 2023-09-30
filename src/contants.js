import { getTimeZone } from './utils/getTimeZone'

export const API_GET_CURRENCIES = 'https://api.vatcomply.com/currencies'
export const API_GET_RATES_BY_BASE = 'https://api.vatcomply.com/rates?base='

export const DATE_TIME_FORMAT_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
  timeZone: getTimeZone(),
  timeZoneName: 'short'
}
