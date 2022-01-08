import moment from 'moment'

export const getStartOfTheMonth = (): string => moment().clone().startOf('month').format('YYYY-MM-DD')

export const getStartOfTheYear = (): string => moment().clone().startOf('year').format('YYYY-MM-DD')
