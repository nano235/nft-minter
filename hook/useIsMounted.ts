"use client"

import { useEffect, useRef } from "react"

export default function useIsMounted(){
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        if(!mounted.current) mounted.current = true
    }, [])

    return mounted
}