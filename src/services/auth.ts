interface Response {
  token: string;
  user: {
    username: string;
    password: string;
  }
}

export function login(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'xiaomibotaapplepramamar',
        user: {
          username: 'Matheus',
          password: 'matheus',
        },
      })
    }, 2000);
  });
}