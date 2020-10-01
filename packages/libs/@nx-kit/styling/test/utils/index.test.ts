import { media } from "../../src/utils";

const theme: any = {
  global: {
    breakpoint: {
      xs: { min: 0, max: 575 },
      sm: { min: 576, max: 767 },
      md: { min: 768, max: 991 },
      lg: { min: 992, max: 1199 },
      xl: { min: 1200, max: null },
    },
  },
};

describe('media function', () => {
  it('works with min', () => {
    expect(media('sm')({ theme })).toBe('@media (min-width: 576px)');
  });
  it('works with min and max', () => {
    expect(media('sm', 'md')({ theme })).toBe('@media (min-width: 576px) and (max-width: 991px)');
  });
  it('works null max', () => {
    expect(media('lg', 'xl')({ theme })).toBe('@media (min-width: 992px)');
  });
});
