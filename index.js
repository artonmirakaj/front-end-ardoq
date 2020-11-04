function highestProduct(nums) {
  let max = nums.sort((a, b) => a - b);
  let product1 = max[0] * max[1] * max[nums.length - 1];
  let product2 =
    max[nums.length - 1] * max[nums.length - 2] * max[nums.length - 3];
  return Math.max(product1, product2);
}
