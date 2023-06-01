values = {
  principle: 15000,
  term: 10,
  interest: 5
}
monthly = '652.1739130434783';
  


describe("#calculator", function() {
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values)).toEqual('652.1739130434783'
  )
});
});


describe("#updatemonthly", function() {
it("should return a result with 2 decimal places", function() {
  expect(updateMonthly(monthly)).toEqual('652.17')
});
});

/// etc
