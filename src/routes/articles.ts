import express, { Request, Response } from 'express';
import Article from './../models/article'; // 27:50

export const articleRouter = express.Router();

articleRouter.get('/new', (req: Request, res: Response) => {
    res.render('articles/new', { article: new Article() });
});

articleRouter.get('/:id', async (req: Request, res: Response) => {
    // const article = await Article.findById(req.params.id);
    // if (article == null) {
    //     res.redirect('/');
    // }
    // res.render('articles/show', { article });
    res.send(req.params.id);
});

articleRouter.post('/', async (req: Request, res: Response) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    try {
        // article = await article.save();
        // console.log(article);
        res.redirect(`/articles/${article.id}`);
    } catch (e) {
        // console.log(e);
        res.render('articles/new', { article });
    }
});