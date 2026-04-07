import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  as: Tag = "div",
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
  children,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  const classes = [
    "reveal",
    `reveal-${variant}`,
    isVisible ? "reveal-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={nodeRef}
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
