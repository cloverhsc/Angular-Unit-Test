describe('First Test', () => {
  let testVariable: any;

  beforeEach(() => {
    testVariable = {};
  });

  it('should be return true', () => {
    // Arrange
    testVariable.a = false;

    // Act
    testVariable.a = true;

    // Assert
    expect(testVariable.a).toBe(true);

  })
})
