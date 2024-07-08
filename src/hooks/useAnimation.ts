import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";
export function UseAnimation({ duration = 500, disableView = false }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const props = useSpring({
    opacity: inView || disableView ? 1 : 0,
    transform: inView || disableView ? "translateY(0)" : "translateY(100px)",
    config: { duration },
  });

  return { ref, props: props };
}
