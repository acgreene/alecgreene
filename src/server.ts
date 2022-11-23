import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose'; // may need to be mongodb
import path from 'path';
import { articleRouter } from './routes/articles';

const app: Application = express();
mongoose.connect('mongodb://localhost/blog');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {

    const articles = [{
        title: 'Test article',
        createdAt: new Date(),
        description: 'Test description'
    }];

    res.render('articles/index', {articles});
});

app.listen(3000);

app.use('/articles', articleRouter);