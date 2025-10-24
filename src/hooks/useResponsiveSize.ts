import { useState, useEffect, useRef } from "react";

type Props = {
  breakpoints: number[];
  widthValues?: number[];
  heightValues?: number[];
};

export function useResponsiveSize({
  breakpoints,
  widthValues,
  heightValues,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const [outSize, setOutSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  const [outFlags, setOutFlags] = useState<{
    width: boolean[];
    height: boolean[];
  }>({
    width: Array(breakpoints.length).fill(false),
    height: Array(breakpoints.length).fill(false),
  });

  // Observe container size
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setContainerSize({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Recalculate output values when size changes
  useEffect(() => {
    const newFlags = {
      width: breakpoints.map((bp) => containerSize.width <= bp),
      height: breakpoints.map((bp) => containerSize.height <= bp),
    };

    let newOutWidth: number | null = null;
    let newOutHeight: number | null = null;

    // --- WIDTH ---
    if (widthValues && widthValues.length === breakpoints.length) {
      const idx = breakpoints.findIndex((bp) => containerSize.width > bp);
      if (idx === -1) {
        newOutWidth = widthValues[widthValues.length - 1];
      } else if (idx === 0) {
        newOutWidth = widthValues[0];
      } else {
        newOutWidth = widthValues[idx];
      }
    }

    // --- HEIGHT ---
    if (heightValues && heightValues.length === breakpoints.length) {
      const idx = breakpoints.findIndex((bp) => containerSize.height > bp);
      if (idx === -1) {
        newOutHeight = heightValues[heightValues.length - 1];
      } else if (idx === 0) {
        newOutHeight = heightValues[0];
      } else {
        newOutHeight = heightValues[idx];
      }
    }

    setOutSize({ width: newOutWidth, height: newOutHeight });
    setOutFlags(newFlags);
  }, [containerSize]);

  return { containerRef, containerSize, outSize, outFlags };
}
