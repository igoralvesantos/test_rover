import Coordinates from '../../src/entities/Coordinates';

describe('Coordinates', () => {
  it('should create an instance correctly', () => {
    const x = 1;
    const y = 2;

    const coordinates = new Coordinates(x, y);

    expect(coordinates.x).toBe(x);
    expect(coordinates.y).toBe(y);
  });
});
