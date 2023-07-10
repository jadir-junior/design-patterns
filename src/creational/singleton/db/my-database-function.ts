import { User } from '../interfaces/User';

export const MyDatabaseFunction = (() => {
  const users: User[] = [];

  return {
    add(user: User): void {
      users.push(user);
    },
    remove(index: number): void {
      users.splice(index, 1);
    },
    show(): void {
      users.forEach((user) => console.log(user));
    },
  };
})();
