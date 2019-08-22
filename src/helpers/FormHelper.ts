import get from 'lodash/get';
import head from 'lodash/head';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';
import toArray from 'lodash/toArray';

import { AcceptableError } from './../types/Common';

/**
 * @param  {{}|null=null} error
 * @param  {string} key
 * @returns any
 */
export function getError(error: AcceptableError = null, key: string): any {
  if (isString(error)) {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return get(error, key);
}

/**
 * @param  {AcceptableError=null} error
 * @param  {string} key
 * @returns any
 */
export function getFirstError(
  error: AcceptableError = null,
  key: string | null = null,
): any {
  const errorCollection = key
    ? getError(error, key)
    : getFirstErrorGroup(error);
  return head(errorCollection);
}

/**
 * @param  {AcceptableError=null} error
 * @returns Array
 */
export function getFirstErrorGroup(error: AcceptableError = null): string[] {
  if (error instanceof Error) {
    return [error.message];
  }

  if (isString(error)) {
    return [error];
  }

  if (isPlainObject(error)) {
    const nonEmptyErrors = toArray(error).filter(
      errorGroup => !isEmpty(errorGroup),
    );
    const firstError = head(nonEmptyErrors);

    return getFirstErrorGroup(firstError);
  }

  if (Array.isArray(error)) {
    return error;
  }

  // If nil or empty
  // then always return empty array
  return [];
}
