import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id?: number;
  title: string;
  location: string;
  description: string;
  price: string;
  image: string;
}

export default function PropertyCard({
  id,
  title,
  location,
  description,
  price,
  image,
}: PropertyCardProps) {
  const CardContent = (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <div className="mb-2 flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <p className="text-lg font-bold text-primary italic">{price}</p>
      </div>
    </div>
  );

  if (id) {
    return <Link href={`/propertys/${id}`}>{CardContent}</Link>;
  }

  return CardContent;
}
