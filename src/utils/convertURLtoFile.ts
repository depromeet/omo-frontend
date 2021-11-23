const convertURLtoFile = async (url: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split('.').pop();
  const filename = url.split('/').pop() as string;
  const metadata = { type: `image/${ext}` };
  return new File([data], filename, metadata);
};

export default convertURLtoFile;
