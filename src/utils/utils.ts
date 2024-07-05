export const updateContent = (content: string, variables: Record<string, string>): string => {
  return Object.keys(variables).reduce((updatedContent, keyName) => {
    return updatedContent.replace(new RegExp(`\{\{${keyName}\}\}`, 'g'), variables[keyName])
  }, content)
}
