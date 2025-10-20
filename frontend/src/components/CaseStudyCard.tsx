import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  category: string;
  description?: string;
  image?: string;
  client?: string;
  year?: string;
  tags?: string[];
  href?: string;
  dense?: boolean; // compact style for Home
  className?: string;
  imageHeightClassName?: string; // override image height classes
};

const CaseStudyCard: React.FC<Props> = ({
  title,
  category,
  description,
  image,
  client,
  year,
  tags,
  href,
  dense = false,
  className = "",
  imageHeightClassName,
}) => {
  const content = (
    <Card className="bg-gray-900 border-gray-800 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden transform group-hover:-translate-y-1">
      {image && (
        <div
          className={[
            "relative overflow-hidden",
            imageHeightClassName || (dense ? "h-40 sm:h-44 md:h-48" : "h-48"),
          ].join(" ")}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
            {category}
          </div>
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p
            className={[
              "text-gray-300",
              dense ? "text-sm sm:text-base line-clamp-3" : "text-sm leading-relaxed md:text-base",
            ].join(" ")}
          >
            {description}
          </p>
        )}

        {!dense && (client || year) && (
          <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
            {client && <div className="flex items-center gap-1">{client}</div>}
            {year && <div className="flex items-center gap-1">{year}</div>}
          </div>
        )}

        {!dense && tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "group rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        ].join(" ")}
        aria-label={`View case study: ${title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={[
        "group rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      ].join(" ")}
    >
      {content}
    </div>
  );
};

export default CaseStudyCard;
