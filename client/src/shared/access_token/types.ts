export type AccessToken = { sub: string; role: Role[]; iat: number; exp: number };
export enum Role {
	ADMIN = 'admin',
	USER = 'user'
}
