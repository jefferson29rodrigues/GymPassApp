import 'dotenv/config';
import { z } from 'zod';

// proccess.env vir em forma de objeto
const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3333),
});

// Valida informações do proccess.env
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    console.error('❌ Invalid environment variables', _env.error.format());

    throw new Error('Invalid environment variables.');
}

export const env = _env.data;