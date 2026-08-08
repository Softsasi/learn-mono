import { json } from '@nextrush/body-parser';
import { cors } from '@nextrush/cors';
import { createApp, createRouter, errorHandler, listen } from 'nextrush';
import { config } from './config/index.js';
import { logger } from './middleware/logger.js';
import { authRouter } from './routes/auth/auth.routes.js';

const router = createRouter();
const app = createApp({ router });

// Error handling (first middleware — catches all downstream errors)
app.use(errorHandler({ includeStack: config.nodeEnv !== 'production' }));

// Request logging
app.use(logger());

// Middleware
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
  ]
}));

app.use(json());

// Routes
router.get('/', (ctx) => {
  ctx.json({ message: 'Welcome to NextRush!' });
});





app.route('/auth', authRouter);


await listen(app, config.port);
