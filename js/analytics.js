export const track = (name, payload = {}) => {
  // Placeholder para GA/Pixel/PostHog
  // Substitua por seu dispatcher real
  if (window?.console) console.debug('[analytics]', name, payload);
};
