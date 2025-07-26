export const getViewSectionId = (pageId: number) => {
  switch (pageId) {
    case 0:
      return 'home'
    case 1:
      return 'about'
    case 2:
      return 'skills'
    case 3:
      return 'projects'
    case 4:
      return 'contact'
    default:
      return 'home'
  }
}
