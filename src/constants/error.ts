export const NICKNAME_ERROR: { [key: number]: string } = {
  409: '존재하는 닉네임은 사용할 수 없습니다.',
};

export const COMMON_ERROR: { [key: number]: string } = {
  400: '요청에 실패했습니다. 요청 형식을 확인해주세요.',
  401: '인증에 실패하였습니다. 토큰을 식별할 수 없습니다.',
};

export const NETWORK_ERROR = '서버와 통신이 되지 않습니다. 단말기의 네트워크를 확인해보세요.';
export const UNKNOWN_ERROR = '알 수 없는 에러가 발생했습니다.';
