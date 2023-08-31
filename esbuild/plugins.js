let makeAllPackagesExternalPlugin = {
    name: 'make-all-packages-external',
    setup(build) {
        let filter = /^.\/node_modules\/oracledb$/// Must not start with "/" or "./" or "../"
        build.onResolve({ filter }, args => ({ path: args.path, external: true }))
    },
}


export default [makeAllPackagesExternalPlugin];
