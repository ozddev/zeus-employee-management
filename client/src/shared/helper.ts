import { browser } from '$app/environment';
import { ACCESS_TOKEN } from './constants';

export function hasAccessToken(): boolean {
	//has to be done with if otherwise the browser will be false
	if (browser) {
		return localStorage.getItem(ACCESS_TOKEN) !== null;
	}

	return false;
}

export function getAccessToken(): string | null {
	if (browser) {
		return localStorage.getItem(ACCESS_TOKEN);
	}

	return null;
}
