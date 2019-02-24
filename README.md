# @ama-team/voxengine-typings

TypeScript definitions for VoxImplant VoxEngine SaaS.

This project supersedes [@ama-team/voxengine-definitions](https://github.com/ama-team/voxengine-definitions).

## Installation

```console
yarn add -D @ama-team/voxengine-typings
```

## Usage

You have to tell TypeScript where new types live at, usually you just
add a new root in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/@types",
      "node_modules/@ama-team"
    ]
  }
}
```

## Conventions

- All definitions are stored inside files with corresponding names (e.g.
`VoxEngine` namespace in `VoxEngine.d.ts`, `CallEvents.Disconnected`
in `CallEvents/Disconnected.d.ts`, and so on.
- There are no index files (except for root one), files named after 
directory one level up are used instead (e.g. `CallEvents.d.ts` instead 
of `CallEvents/index.d.ts`).
- Flat (global) definitions are stored in file with dollar sign name 
(`$.d.ts`).
- Some types which exist but not exposed to end user are packed inside
`$Implicit` namespaces.

## Licensing

MIT & UPL licenses

AMA Team, 2019
