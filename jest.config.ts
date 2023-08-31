import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import { jsWithTs as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
  modulePathIgnorePatterns: [".build"]
}

export default config
