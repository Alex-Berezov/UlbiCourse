type Mods = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string => {
  const some = cls
    ? (mods = { some: 'some' })
    : mods.length
    ? {}
    : { some2: 'some2' }
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}
