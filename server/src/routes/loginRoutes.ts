import { Router, Request, Response } from 'express';

// how to deal with poor type def
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method='POST'>
      <div>
        <label>Email</label>
        <input name='email' />
      </div>

      <div>
      <label>Password</label>
      <input name='password' type='password' />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // mark this person as logged in
    res.redirect('/');

    //redirect them to the root route
  } else {
    res.send('Invalid email or password');
  }
});

export { router };
