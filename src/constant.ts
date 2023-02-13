export const RANGES_TYPE = {
  FIXED_RANGES: "fixedRanges",
  DATE_RANGES: "dateRanges"
}

export const FIXED_RANGES_TYPE = {
  BEFORE: "Before",
  AFTER: "After"
}

export const FEE_TYPE = {
  PERCENTAGE: "Percentage",
  FIXED_AMOUNT: "FixedAmount"
}

export const DATE_OPTIONS = [
  {
    value: FIXED_RANGES_TYPE.BEFORE,
    content: FIXED_RANGES_TYPE.BEFORE,
  },
  {
    value: FIXED_RANGES_TYPE.AFTER,
    content: FIXED_RANGES_TYPE.AFTER,
  }
]

export const FEE_OPTIONS = [
  {
    value: FEE_TYPE.PERCENTAGE,
    content: "Percentage"
  },
  {
    value: FEE_TYPE.FIXED_AMOUNT,
    content: "Fixed amount",
  }
]