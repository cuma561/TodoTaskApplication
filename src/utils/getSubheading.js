export function getSubheading(numberOfTodoItem) {
  switch (true) {
    case numberOfTodoItem > 4:
      return `${numberOfTodoItem} tasks`;
    case numberOfTodoItem > 1:
      return `${numberOfTodoItem} tasks`;
    case numberOfTodoItem === 1:
      return "1 tasks";
    case numberOfTodoItem === 0:
    default:
      return "No tasks";
  }
}

export function getSubheadingCategory(numberOfCategoryItem) {
  switch (true) {
    case numberOfCategoryItem > 4:
      return `${numberOfCategoryItem} categories`;
    case numberOfCategoryItem > 1:
      return `${numberOfCategoryItem} categories`;
    case numberOfCategoryItem === 1:
      return "1 category";
    case numberOfCategoryItem === 0:
    default:
      return "No category";
  }
}
