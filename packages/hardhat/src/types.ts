export interface TypechainConfig {
  outDir: string
  target: string
  artifacts?: string[] | undefined
  alwaysGenerateOverloads: boolean
  discriminateTypes: boolean
  tsNocheck: boolean
  externalArtifacts?: string[]
  dontOverrideCompile: boolean
}

export interface TypechainUserConfig extends Partial<TypechainConfig> {}
