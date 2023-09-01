export function getSubheading(numberOfTodoItem)
{
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