import { browser } from '$app/environment';
import { jwtDecode } from 'jwt-decode';
import { ACCESS_TOKEN } from '../constants';
import type { AccessToken } from './types';

export function hasAccessToken(): boolean {
	return getAccessToken() !== null;
}

export function getAccessToken(): string | null {
	if (browser) {
		return localStorage.getItem(ACCESS_TOKEN);
	}

	return null;
}

export function getUserSub(jwtToken: string) {
	const token: AccessToken = jwtDecode(jwtToken);
	return token.sub;
}
