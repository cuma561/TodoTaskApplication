export function getSubheading(numberOfTodoItem)
{
	switch (true) {
        case numberOfTodoItem > 4:
            return `${numberOfTodoItem} zadań`;
        case numberOfTodoItem > 1:
            return `${numberOfTodoItem} zadania`;
        case numberOfTodoItem === 1:
            return "1 zadanie";
        case numberOfTodoItem === 0:
        default:
            return "Brak zadań";
    }
}