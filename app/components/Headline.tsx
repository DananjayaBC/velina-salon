import { Fragment, type ReactNode } from "react";

type Props = {
  /** Lines separated by "|". Wrap characters in {} to render them in the script font. */
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

function renderLine(line: string, key: number) {
  const parts: ReactNode[] = [];
  const re = /\{([^}]+)\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(line))) {
    if (m.index > last) {
      parts.push(<Fragment key={`t${key}-${i++}`}>{line.slice(last, m.index)}</Fragment>);
    }
    parts.push(
      <span key={`s${key}-${i++}`} className="swash">
        {m[1]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < line.length) {
    parts.push(<Fragment key={`t${key}-${i++}`}>{line.slice(last)}</Fragment>);
  }
  return parts;
}

export default function Headline({ text, className = "", as: Tag = "h2" }: Props) {
  const lines = text.split("|");
  return (
    <Tag className={`display ${className}`}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {renderLine(line, i)}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
}
