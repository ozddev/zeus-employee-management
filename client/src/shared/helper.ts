import { browser } from '$app/environment';
import { ACCESS_TOKEN } from './constants';

export function hasAccessToken(): boolean {
	return browser && localStorage.getItem(ACCESS_TOKEN) !== null;
}
