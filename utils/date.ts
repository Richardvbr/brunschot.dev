export const getYearsFrom = (startDate: Date): number =>
  Math.floor(
    (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
