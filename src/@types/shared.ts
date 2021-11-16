export type NicknameInputErrorType = 'default' | 'duplicate' | 'usable';

export interface requestError extends Error {
  response: { status: number };
}
