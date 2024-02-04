import * as bcrypt from 'bcrypt';

export async function hashPassword(
  password: string,
  providedSalt?: string,
): Promise<string> {
  const salt = providedSalt ? providedSalt : await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
}
