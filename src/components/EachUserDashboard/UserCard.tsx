// UserCard.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { AspectRatio } from '@/components/ui/aspect-ratio';

const UserCard: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Harris</CardTitle>
          <CardDescription>User Profile</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted">
          <img src="image.png" alt="" />
          </AspectRatio>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
export default UserCard;
