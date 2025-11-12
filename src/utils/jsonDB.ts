import {
    BaseDirectory,
    readTextFile,
    writeTextFile
} from '@tauri-apps/plugin-fs'
import { resolveResource } from '@tauri-apps/api/path'

const filePath = 'src-tauri/database.json'

export async function readDB() {
    try {
        const resourcePath = await resolveResource('src-tauri/database.json')
        const content = JSON.parse(await readTextFile(resourcePath))
        console.log('oi3', content)
    } catch {
        return { students: [], instructor: [], employers: [] }
    }
}

export async function writeDB(data: any) {
    await writeTextFile(filePath, JSON.stringify(data, null, 2))
}
