export const preloadImages = (urls: string[]) => {
  urls.forEach(url => {
    const img = new Image();

    img.fetchPriority = 'high';

    img.loading = 'eager';

    img.src = url;

    img.onload = () => {};

    img.onerror = () => {};
  });
};
