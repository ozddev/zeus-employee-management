import * as bcryptjs from 'bcryptjs';

export async function hashPassword(
  password: string,
  providedSalt?: string,
): Promise<string> {
  const salt = providedSalt ? providedSalt : await bcryptjs.genSalt();
  return bcryptjs.hash(password, salt);
}

export async function comparePasswords(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcryptjs.compare(password, hashedPassword);
}
