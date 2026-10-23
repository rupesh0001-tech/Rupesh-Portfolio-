import { createId, readCollection, writeCollection } from "../store/file-store";

export type MediaAssetDTO = {
  id: string;
  filename: string;
  url: string;
  mimeType: string;
  size: number;
  alt: string;
  createdAt: string;
};

export const mediaRepository = {
  list(): MediaAssetDTO[] {
    return readCollection<MediaAssetDTO>("media").sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt)
    );
  },

  create(data: {
    filename: string;
    url: string;
    mimeType: string;
    size: number;
    alt?: string;
  }): MediaAssetDTO {
    const asset: MediaAssetDTO = {
      id: createId(),
      filename: data.filename,
      url: data.url,
      mimeType: data.mimeType,
      size: data.size,
      alt: data.alt ?? "",
      createdAt: new Date().toISOString(),
    };
    writeCollection("media", [asset, ...this.list()]);
    return asset;
  },

  remove(id: string): MediaAssetDTO | null {
    const all = this.list();
    const asset = all.find((m) => m.id === id) ?? null;
    if (!asset) return null;
    writeCollection(
      "media",
      all.filter((m) => m.id !== id)
    );
    return asset;
  },
};
