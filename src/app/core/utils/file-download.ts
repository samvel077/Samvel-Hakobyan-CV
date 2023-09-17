export const fileDownload = (urls: string[]) => {
    const link = document.createElement('a');

    link.setAttribute('download', '');
    link.style.display = 'none';

    document.body.appendChild(link);

    for (let i = 0; i < urls.length; i++) {
        link.setAttribute('href', urls[i]);
        link.click();
    }

    document.body.removeChild(link);
}
