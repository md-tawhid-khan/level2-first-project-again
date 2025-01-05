import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRouters } from './app/modules/student/student.route';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());
// api/v1/students/create-student 

// application routes
app.use('/api/v1/students', StudentRouters)

const getAController= (req: Request, res: Response) => {

  const a = 10;
  res.send(a);
}

app.get('/',getAController);

console.log(process.cwd());
//E:\level2\first-project-again

export default app;
