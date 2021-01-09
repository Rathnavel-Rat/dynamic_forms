import { createMedia } from "@artsy/fresnel";
const AppMedia = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  }
});
export const mediaStyles = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;

