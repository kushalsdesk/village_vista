import Image from "next/image";
import { CalendarIcon, UserIcon, TagIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  tags: string[];
}

export default function BlogPost({
  title,
  author,
  date,
  content,
  image,
  tags,
}: BlogPostProps) {
  return (
    <Card className="max-w-2xl mx-auto my-8 overflow-hidden bg-white shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={700}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-800">
          {title}
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-green-100 text-green-800"
            >
              <TagIcon className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
