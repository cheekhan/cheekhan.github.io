// manifest 文件入参
export interface ManifestConfig {
    name: string;
    icons: Array<{
        src: string;
        type: string;
        sizes: string;
    }>
}