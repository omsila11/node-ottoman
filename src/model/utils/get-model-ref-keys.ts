import { getRefdocIndexByKey } from '../index/index-manager';
import { buildRefKey } from '../index/refdoc/build-index-refdoc';

export const getModelRefKeys = (data, prefix) => {
  const refdocKeys: string[] = [];
  const refdocs = getRefdocIndexByKey(prefix);
  if (refdocs) {
    for (const refdoc of refdocs) {
      const { fields } = refdoc;
      const values: string[] = [];
      for (const field of fields) {
        if (data.hasOwnProperty(field) && data[field] !== undefined && data[field] !== null) {
          values.push(data[field]);
        }
      }
      refdocKeys.push(buildRefKey(fields, values, prefix));
    }
  }
  return refdocKeys;
};
