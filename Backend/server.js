import exprss from 'express';
import hobbyRoutes from './routes/hobbyRoutes.js';


const app = exprss();
app.use(exprss.json()); 

app.use('/api/hobbies', hobbyRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
