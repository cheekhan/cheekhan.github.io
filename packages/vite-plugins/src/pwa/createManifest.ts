import type {ManifestConfig} from "./types.ts"

/**
 * 创建一个简略的 manifest
 * @param config
 */
export default function useManifest(config: ManifestConfig) {
    return {
        "name": config.name,
        "short_name": config.name,
        "start_url": ".",
        "display": "fullscreen",
        "background_color": "#fff",
        "description": "自动创建的 PWA 应用",
        "icons": config.icons,
    }
}