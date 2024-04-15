import Position, { CardinalDirections } from '../../src/entities/Position';
import Rover from '../../src/entities/Rover';

describe('Rover', () => {
  const position = new Position(1, 2, CardinalDirections.North);
  const rover = new Rover(position);

  it('should get initial position', () => {
    const initialPosition = rover.position;

    expect(initialPosition).toEqual(position);
  });

  it('should set new position', () => {
    const newPosition = new Position(3, 4, CardinalDirections.East);

    rover.position = newPosition;

    expect(rover.position).toEqual(newPosition);
  });
});
