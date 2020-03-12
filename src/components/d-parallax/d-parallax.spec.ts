import { render } from '@stencil/core/testing';
import { DParallax, h } from './d-parallax';

describe('d-parallax', () => {
  it('should build', () => {
    expect(new DParallax()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [DParallax],
        html: '<d-parallax></d-parallax>'
      });
    });
  });
});
