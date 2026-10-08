export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const cls = variant === "primary" ? "btn-primary" : "btn-outline";
  if (href) {
    return (
      <a href={href} className={`${cls} ${className}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={`${cls} ${className}`} {...props}>
      {children}
    </button>
  );
}