const getIsNextPage = (offset: number, limit: number, totalRecordCount: number) => {
    return Boolean(offset < totalRecordCount && offset + limit < totalRecordCount);
};

const getIsPrevPage = (offset: number, limit: number) => {
    return Boolean(offset > 0 && offset > limit);
};

const getImageUrl = (url: string, token: string) => {
    return `${url}&token=${token}`;
};

const getStreamUrl = (libraryId: string, id: string | null, token: string) => {
    return `/api/${libraryId}/tracks/${id}/stream?token=${token}`;
};

export const controllerHelpers = {
    getImageUrl,
    getIsNextPage,
    getIsPrevPage,
    getStreamUrl,
};
