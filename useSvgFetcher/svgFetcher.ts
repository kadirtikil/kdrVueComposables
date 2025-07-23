

export function useSvgFetcher(rowCount: number, columnCount: number): Map<number, string[]> {

    const svgs = import.meta.glob('/src/assets/marquee-svgs/*.svg', { eager: true }) as Record<string, { default: string }>
    let svgMatrix: Map<number, string[]> = new Map<number, string[]>()
    let svgPaths :string[] = Object.values(svgs).map(mod => mod.default)

    let arrIndex = 0
    for(let i = 0; i < rowCount; i++){
        let paths : string[] = []
        for(let ii = 0; ii < columnCount; ii++) {
            if(arrIndex < svgPaths.length) {
                paths.push(svgPaths[arrIndex])
                arrIndex++
            }
        }

        svgMatrix?.set(i, paths)
    }

    console.log(svgMatrix)
    return svgMatrix
}
