import subarraySum from './subarraySum'
describe('subarraySum', () => {
  test('subarraySum', () => {
    expect(subarraySum([1,1,1], 2)).toBe(2);
    expect(subarraySum([1,2,3], 3)).toBe(2);
  })
})
