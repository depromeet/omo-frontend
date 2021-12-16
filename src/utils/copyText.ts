import { toast } from 'react-toastify';

const toastifyCustomOptions = {
  position: 'bottom-center',
  hideProgressBar: true,
  pauseOnHover: false,
  autoClose: 1300,
  theme: 'colored',
  icon: false,
  closeButton: false,
  style: {
    margin: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '90%',
    fontSize: '14px',
  },
} as const;

const COPY_SUCCESS_MESSAGE = '텍스트 복사에 성공했어요!';

const COPY_FAIL_MESSAGE = '텍스트 복사에 실패했어요.';

const onSuccess = (text: string) => toast(text, toastifyCustomOptions);

const onFailure = (text: string) => toast.error(text, toastifyCustomOptions);

export const copyText = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => onSuccess(COPY_SUCCESS_MESSAGE))
    .catch(() => onFailure(COPY_FAIL_MESSAGE));
};
