interface Reponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Reponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdgasgasdgasdgasdg',
        user: {
          name: 'Alan',
          email: 'alan@fatec.com',
        },
      });
    }, 2000);
  });
}
