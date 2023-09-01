import { Button } from '../Button/Button';
export function TodoItem()
{
	return(
		<li>
			Testowe Zadanie
			<Button>Zrobione</Button>
			<Button>Edytuj</Button>
			<Button>Usuń</Button>
		</li>
	)
}