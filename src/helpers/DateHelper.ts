import moment from 'moment';
import pluralize from 'pluralize';

/**
 * Humanize date difference
 * @param {String} diff
 * @param {String} unit
 */
export function humanizeDateDiff(diff: number, unit: string): string {
  return `Over ${diff} ${pluralize(unit, diff)} experience`;
}

/**
 * Get datetime difference from now
 * @param {String} datetime
 */
export function diffFromNow(datetime: string): string | null {
  const now = moment();
  const from = moment(datetime);

  if (!from.isValid()) {
    return null;
  }

  const diffInYears = now.diff(from, 'years');
  if (diffInYears >= 1) {
    return humanizeDateDiff(diffInYears, 'year');
  }

  const diffInMonths = now.diff(from, 'months');
  if (diffInMonths >= 1) {
    return humanizeDateDiff(diffInMonths, 'month');
  }

  const diffInDays = now.diff(from, 'days');
  return humanizeDateDiff(diffInDays, 'day');
}

/**
 * Format datetime string to NZ date format
 */
export function formatNZDate(date: moment.MomentInput): string {
  return moment(date).format('Do MMM, YYYY');
}
