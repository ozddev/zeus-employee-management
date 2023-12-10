import { browser } from '$app/environment';
import { ACCESS_TOKEN } from './constants';

export function hasAccessToken(): boolean {
	return getAccessToken() !== null;
}

export function getAccessToken(): string | null {
	if (browser) {
		return localStorage.getItem(ACCESS_TOKEN);
	}

	return null;
}
