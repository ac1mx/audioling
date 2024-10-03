import { albumApiSchema } from '@/controllers/album/album-api-schema.js';
import { trackApiSchema } from '@/controllers/track/track-api-schema.js';
import { authApiSchema } from './auth/auth-api-schema.js';
import { libraryApiSchema } from './library/library-api-schema.js';
import { rootApiSchema } from './root/root-api-schema.js';
import { userApiSchema } from './user/user-api-schema.js';

export const apiSchema = {
    album: albumApiSchema,
    auth: authApiSchema,
    library: libraryApiSchema,
    root: rootApiSchema,
    track: trackApiSchema,
    user: userApiSchema,
};

export type ApiSchema = typeof apiSchema;
