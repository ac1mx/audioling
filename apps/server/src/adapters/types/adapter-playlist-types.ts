import type { ListSortOrder, TrackListSortOptions } from '@repo/shared-types';
import type { AdapterRelatedGenre } from '@/adapters/types/adapter-genre-types.js';
import type { AdapterTrack } from '@/adapters/types/adapter-track-types.js';
import type {
    PaginatedResponse,
    QueryMutation,
    QueryRequest,
} from '@/adapters/types/shared-types.js';

export interface AdapterPlaylist {
    description: string | null;
    duration: number | null;
    genres: AdapterRelatedGenre[];
    id: string;
    imageUrl: string | null;
    name: string;
    owner: string | null;
    ownerId: string | null;
    public: boolean | null;
    size: number | null;
    songCount: number | null;
    // rules?: Record<string, string | boolean> | null;
    // sync?: boolean | null;
}

type AdapterClearPlaylistQuery = {
    id: string;
};

export type AdapterClearPlaylistRequest = QueryRequest<AdapterClearPlaylistQuery>;

export type AdapterClearPlaylistResponse = null;

export type AdapterAddToPlaylistResponse = null;

type AdapterAddToPlaylistQuery = {
    id: string;
};

type AdapterAddToPlaylistBody = {
    entry: {
        id: string;
        type: 'album' | 'song';
    }[];
};

export type AdapterAddToPlaylistRequest = QueryMutation<
    AdapterAddToPlaylistQuery,
    AdapterAddToPlaylistBody
>;

export type AdapterRemoveFromPlaylistResponse = null;

export type AdapterRemoveFromPlaylistQuery = {
    id: string;
};

export type AdapterRemoveFromPlaylistBody = {
    entry: string[];
};

export type AdapterRemoveFromPlaylistRequest = QueryMutation<
    AdapterRemoveFromPlaylistQuery,
    AdapterRemoveFromPlaylistBody
>;

export type AdapterCreatePlaylistResponse = null;

export type AdapterCreatePlaylistBody = {
    comment?: string;
    name: string;
    owner?: string;
    ownerId?: string;
    public?: boolean;
    rules?: Record<string, string | number | boolean>;
    sync?: boolean;
};

export type AdapterCreatePlaylistRequest = QueryMutation<
    AdapterCreatePlaylistResponse,
    AdapterCreatePlaylistBody
>;

export type AdapterUpdatePlaylistResponse = null;

export type AdapterUpdatePlaylistQuery = {
    id: string;
};

export type AdapterUpdatePlaylistBody = {
    comment?: string;
    name: string;
    owner?: string;
    ownerId?: string;
    public?: boolean;
    rules?: Record<string, string | number | boolean>;
    sync?: boolean;
};

export type AdapterUpdatePlaylistRequest = QueryMutation<
    AdapterUpdatePlaylistQuery,
    AdapterUpdatePlaylistBody
>;

export type AdapterDeletePlaylistResponse = null;

export type AdapterDeletePlaylistQuery = { id: string };

export type AdapterDeletePlaylistRequest = QueryMutation<AdapterDeletePlaylistQuery>;

export type AdapterPlaylistListResponse = PaginatedResponse<AdapterPlaylist>;

export enum AdapterPlaylistListSort {
    DURATION = 'duration',
    NAME = 'name',
    OWNER = 'owner',
    PUBLIC = 'public',
    SONG_COUNT = 'songCount',
    UPDATED_AT = 'updatedAt',
}

export type AdapterPlaylistListQuery = {
    limit: number;
    offset: number;
    searchTerm?: string;
    sortBy: AdapterPlaylistListSort;
    sortOrder: ListSortOrder;
    userId?: string;
};

export type AdapterPlaylistListRequest = QueryRequest<AdapterPlaylistListQuery>;

export type AdapterPlaylistListCountQuery = Omit<
    AdapterPlaylistListQuery,
    'sortBy' | 'sortOrder' | 'limit' | 'offset'
>;

export type AdapterPlaylistListCountRequest = QueryRequest<AdapterPlaylistListCountQuery>;

export type AdapterPlaylistListCountResponse = number;

export type AdapterPlaylistDetailResponse = AdapterPlaylist;

export type AdapterPlaylistDetailQuery = {
    id: string;
};

export type AdapterPlaylistDetailRequest = QueryRequest<AdapterPlaylistDetailQuery>;

export type AdapterPlaylistTrackListResponse = PaginatedResponse<AdapterTrack>;

export type AdapterPlaylistTrackListQuery = {
    id: string;
    limit: number;
    offset: number;
    searchTerm?: string;
    sortBy?: TrackListSortOptions;
    sortOrder?: ListSortOrder;
};

export type AdapterPlaylistTrackListRequest = QueryRequest<AdapterPlaylistTrackListQuery>;

export type AdapterPlaylistTrackListCountQuery = AdapterPlaylistTrackListQuery;

export type AdapterPlaylistTrackListCountRequest = QueryRequest<AdapterPlaylistTrackListCountQuery>;

export type AdapterPlaylistTrackListCountResponse = number;
