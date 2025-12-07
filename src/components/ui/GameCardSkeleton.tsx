import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px">
      <Skeleton height="200px" width="100%">
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card.Root>
  );
};

export default GameCardSkeleton;
