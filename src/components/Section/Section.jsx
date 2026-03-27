import "./_Section.scss";

export default function Section({ className, children }) {
  return <section className={`section ${className || ""}`}>{children}</section>;
}
