export function groupByKey(array: any, key: string) {
  return array.reduce((hash: string, obj: any) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
}
