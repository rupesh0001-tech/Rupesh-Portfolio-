export type UploadResult = {
  filename: string;
  url: string;
  mimeType: string;
  size: number;
};

export interface StorageAdapter {
  upload(
    bytes: Uint8Array,
    opts: { filename: string; mimeType: string }
  ): Promise<UploadResult>;
  delete(url: string): Promise<void>;
}
