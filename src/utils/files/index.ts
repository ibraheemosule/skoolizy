export const getFileBlob = async (url: string) =>
  fetch(url).then((res) => res.blob());

export const downloadFile = async (url: string) => {
  let img;
  if (url.startsWith('http')) img = URL.createObjectURL(await getFileBlob(url));
  else img = url;

  const a = document.createElement('a');
  a.style.setProperty('display', 'none');
  document.body.appendChild(a);
  a.download = '';
  a.href = img;
  a.click();
  a.remove();
};
