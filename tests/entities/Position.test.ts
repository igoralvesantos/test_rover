import Position, { CardinalDirections } from "../../src/entities/Position";

describe("Position", () => {
  const position = new Position(1, 2, CardinalDirections.North);

  it("should get initial x coordinate", () => {
    const x = position.x;

    expect(x).toEqual(1);
  });

  it("should get initial y coordinate", () => {
    const y = position.y;

    expect(y).toEqual(2);
  });

  it("should get initial cardinal direction", () => {
    const cardinalDirection = position.cardinalDirection;

    expect(cardinalDirection).toEqual(CardinalDirections.North);
  });

  it("should get formatted position string", () => {
    const formattedPositionString = position.formattedPositionString;

    expect(formattedPositionString).toEqual("1 2 N");
  });

  it("should set new x coordinate", () => {
    position.x = 3;

    expect(position.x).toEqual(3);
  });

  it("should set new y coordinate", () => {
    position.y = 4;

    expect(position.y).toEqual(4);
  });

  it("should set new cardinal direction", () => {
    position.cardinalDirection = CardinalDirections.South;

    expect(position.cardinalDirection).toEqual(CardinalDirections.South);
  });
});
