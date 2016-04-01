describe('mergeSort', function () {

  it('should be a function', function () {

    expect(mergeSort).to.be.a('function');
  });

  it('should return an Array', function () {

    expect(mergeSort([1, 2, 3])).to.be.an('array');
  });

  it('should return the sorted Array', function () {

    expect(mergeSort([3, 4, 2, 1])).to.deep.equal([1, 2, 3, 4]);
    expect(mergeSort([9, 4, 3, 5, 10, 5, 0, 10])).to.deep.equal([0, 3, 4, 5, 5, 9, 10, 10]);
  })
});