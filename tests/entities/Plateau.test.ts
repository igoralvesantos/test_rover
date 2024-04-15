import Coordinates from '../../src/entities/Coordinates';
import Position, { CardinalDirections } from '../../src/entities/Position';
import Plateau from '../../src/entities/Plateau';

describe('Plateau', () => {
  const minCoordinates = new Coordinates(0, 0);
  const maxCoordinates = new Coordinates(5, 5);
  const plateau = new Plateau(minCoordinates, maxCoordinates);

  it('should have minCoordinates (0, 0)', () => {
    expect(plateau.minCoordinates).toEqual(minCoordinates);
  });

  it('should have maxCoordinates (5, 5)', () => {
    expect(plateau.maxCoordinates).toEqual(maxCoordinates);
  });

  it('should return false when position is within limits', () => {
    const position = new Position(3, 3, CardinalDirections.North);

    expect(plateau.isOffLimits(position)).toBe(false);
  });

  it('should return true when position is off limits', () => {
    const position = new Position(6, 6, CardinalDirections.North);

    expect(plateau.isOffLimits(position)).toBe(true);
  });
});
