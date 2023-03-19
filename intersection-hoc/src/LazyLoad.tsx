import { useEffect, useRef, useState } from "react";

export const Placeholder = (props: {
    width?: number | string;
    height?: number | string;
}) => {
    const width =
        props.width && typeof props.width === "string"
            ? props.width
            : props.width + "px";
    const height =
        props.height && typeof props.height === "string"
            ? props.height
            : props.height + "px";

    return <div className="child-placeholder" style={{ width, height }}></div>;
};

type LazyLoadProps = {
    children: JSX.Element;
    width?: number | string;
    height?: number | string;
    once?: boolean;
    observerOptions?: IntersectionObserverInit;
};

export const LazyLoad = ({ once, observerOptions, children, width, height }: LazyLoadProps) => {
    const childRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const child = childRef.current as HTMLDivElement;

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);

            if (once && entry.isIntersecting) {
                observer.unobserve(child);
            }
        }, observerOptions);

        observer.observe(child);

        return () => observer.unobserve(child);
    }, []);

    if (once && isIntersecting) return children;

    return (
        <div ref={childRef} className="lazy-load-box">
            {isIntersecting ? (
                children
            ) : (
                <Placeholder width={width} height={height} />
            )}
        </div>
    );
};